#version 330 core
layout (triangles) in;
layout (line_strip, max_vertices = 12) out;

in VS_OUT {
    vec3 normal;
} gs_in[];

const float MAGNITUDE = 0.2;

uniform mat4 projection;

void GenerateLine(int index)
{
    vec4 pos = gl_in[index].gl_Position;
    gl_Position = projection * pos;
    EmitVertex();
    pos += vec4(gs_in[index].normal, 0.0) * MAGNITUDE;
    gl_Position = projection * pos;
    EmitVertex();
    pos += vec4(gs_in[index].normal.y, vec3(0.0)) * MAGNITUDE;
    gl_Position = projection * pos;
    EmitVertex();
    pos += vec4(gs_in[index].normal, 0.0) * MAGNITUDE;
    gl_Position = projection * pos;
    EmitVertex();
    EndPrimitive();
}

void main()
{
    GenerateLine(0); // first vertex normal
    GenerateLine(1); // second vertex normal
    GenerateLine(2); // third vertex normal
}
