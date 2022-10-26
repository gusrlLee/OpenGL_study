#version 330 core
layout (location = 0) in vec3 aPos;
layout (location = 1) in vec3 aOffset;

uniform mat4 projection;
uniform mat4 view;

void main() 
{
    float scale = 2.1f;
    float dt = 0.001f;

    gl_Position = projection * view * vec4(aPos * scale + aOffset, 1.0);
}
