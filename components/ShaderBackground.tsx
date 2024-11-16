import React, { useEffect, useRef } from "react";

interface ShaderBackgroundProps {
	color: [number, number, number]; // RGB values (0.0 to 1.0)
	bgColor: [number, number, number]; // Background RGB values (0.0 to 1.0)
}

const ShaderBackground: React.FC<ShaderBackgroundProps> = ({
	color,
	bgColor,
}) => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	useEffect(() => {
		const canvas = canvasRef.current;

		if (!canvas) {
			console.error("Canvas not found!");
			return;
		}

		const gl = canvas.getContext("webgl");
		if (!gl) {
			console.error("WebGL not supported!");
			return;
		}

		// Vertex Shader Source
		const vertexShaderSource = `
      attribute vec4 a_position;
      void main() {
        gl_Position = a_position;
      }
    `;

		// Fragment Shader Source
		const fragmentShaderSource = `
      #ifdef GL_ES
      precision mediump float;
      #endif

      uniform float iTime;
      uniform vec2 iResolution;
      uniform vec3 iColor;
      uniform vec3 iBgColor;

      void main() {
        vec2 fragCoord = gl_FragCoord.xy;
        vec2 uv = (2.0 * fragCoord - iResolution.xy) / min(iResolution.x, iResolution.y);

        for(float i = 1.0; i < 10.0; i++){
            uv.x += 0.6 / i * cos(i * 2.5 * uv.y + iTime);
            uv.y += 0.6 / i * cos(i * 1.5 * uv.x + iTime);
        }
        
        vec3 baseColor = iBgColor / abs(sin(iTime - uv.y - uv.x));
        gl_FragColor = vec4(baseColor * iColor, 1.0);
      }
    `;

		// Helper Function to Compile Shader
		const compileShader = (
			gl: WebGLRenderingContext,
			source: string,
			type: number
		): WebGLShader | null => {
			const shader = gl.createShader(type);
			if (!shader) return null;

			gl.shaderSource(shader, source);
			gl.compileShader(shader);

			if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
				console.error(
					"Shader compile error:",
					gl.getShaderInfoLog(shader)
				);
				gl.deleteShader(shader);
				return null;
			}
			return shader;
		};

		// Compile Shaders
		const vertexShader = compileShader(
			gl,
			vertexShaderSource,
			gl.VERTEX_SHADER
		);
		const fragmentShader = compileShader(
			gl,
			fragmentShaderSource,
			gl.FRAGMENT_SHADER
		);
		if (!vertexShader || !fragmentShader) return;

		// Create Program
		const program = gl.createProgram();
		if (!program) {
			console.error("Failed to create program!");
			return;
		}

		gl.attachShader(program, vertexShader);
		gl.attachShader(program, fragmentShader);
		gl.linkProgram(program);

		if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
			console.error("Program link error:", gl.getProgramInfoLog(program));
			return;
		}

		gl.useProgram(program);

		// Define Full-Screen Quad
		const vertices = new Float32Array([
			-1,
			-1, // Bottom-left
			1,
			-1, // Bottom-right
			-1,
			1, // Top-left
			-1,
			1, // Top-left
			1,
			-1, // Bottom-right
			1,
			1, // Top-right
		]);

		// Create Buffer
		const buffer = gl.createBuffer();
		if (!buffer) {
			console.error("Failed to create buffer!");
			return;
		}

		gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
		gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

		// Link Vertex Position to Shader
		const positionLocation = gl.getAttribLocation(program, "a_position");
		gl.enableVertexAttribArray(positionLocation);
		gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

		// Uniform Locations
		const iResolutionLocation = gl.getUniformLocation(
			program,
			"iResolution"
		);
		const iTimeLocation = gl.getUniformLocation(program, "iTime");
		const iColorLocation = gl.getUniformLocation(program, "iColor");
		const iBgColorLocation = gl.getUniformLocation(program, "iBgColor");

		// Resize Canvas
		const resizeCanvas = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
			gl.viewport(0, 0, canvas.width, canvas.height);
		};
		resizeCanvas();
		window.addEventListener("resize", resizeCanvas);

		// Animation Loop
		const startTime = performance.now();
		const animate = () => {
			const elapsedTime = (performance.now() - startTime) / 1000;

			// Update Uniforms
			gl.uniform2f(iResolutionLocation, canvas.width, canvas.height);
			gl.uniform1f(iTimeLocation, elapsedTime);
			gl.uniform3fv(iColorLocation, color);
			gl.uniform3fv(iBgColorLocation, bgColor);

			// Draw Quad
			gl.clear(gl.COLOR_BUFFER_BIT);
			gl.drawArrays(gl.TRIANGLES, 0, vertices.length / 2);

			requestAnimationFrame(animate);
		};
		animate();

		// Cleanup on Unmount
		return () => {
			window.removeEventListener("resize", resizeCanvas);
		};
	}, [color, bgColor]); // Re-run effect if either color changes

	return <canvas ref={canvasRef} />;
};

export default ShaderBackground;
