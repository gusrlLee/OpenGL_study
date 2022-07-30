cmake_minimum_required(VERSION 3.0)
project(excute_file)
add_compile_options(-g)
set(CMAKE_CXX_STANDARD 11)

# find opengl
find_package(OpenGL REQUIRED)
find_package(Assimp REQUIRED)

# find glfw library
set(GLFW_INCLUDE_DIRS /opt/homebrew/Cellar/glfw/3.3.6/include)
set(GLFW_LIBRARY_DIRS /opt/homebrew/Cellar/glfw/3.3.6/lib)
set(GLFW_LIBRARIES libglfw.3.3.dylib)

# find glm library
set(GLM_INCLUDE_DIRS /opt/homebrew/Cellar/glm/0.9.9.8/include)

# check directory
add_subdirectory(glad)

add_executable(${PROJECT_NAME} Gamma_Correction/main.cpp)

target_link_directories(${PROJECT_NAME} PUBLIC
    ${GLFW_LIBRARY_DIRS}
    ${ASSIMP_LIBRARY_DIRS}
)

target_link_libraries(${PROJECT_NAME} PUBLIC
    GLAD_LIBRARIES
    ${OPENGL_LIBRARIES}
    ${GLFW_LIBRARIES}
    ${ASSIMP_LIBRARIES}
)
target_include_directories( ${PROJECT_NAME} PUBLIC
    ${OpenGL_INCLUDE_DIRS}
    ${CMAKE_CURRENT_SOURCE_DIR}/glad/include
    ${GLFW_INCLUDE_DIRS}
    ${CMAKE_SOURCE_DIR}/include
    ${CMAKE_SOURCE_DIR}/include/stb_image.h
    ${GLM_INCLUDE_DIRS}
    ${ASSIMP_INCLUDE_DIRS}
)
        
