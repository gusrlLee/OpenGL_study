cmake_minimum_required(VERSION 3.0)
add_library(GLAD_LIBRARIES
    src/glad.c
)

find_package(OpenGL REQUIRED)

target_include_directories(GLAD_LIBRARIES PUBLIC
    ${CMAKE_CURRENT_SOURCE_DIR}/include
    ${OpenGL_INCLUDE_DIRS}
)

target_link_libraries(GLAD_LIBRARIES 
    ${OpenGL_LIBRARIES}
)


