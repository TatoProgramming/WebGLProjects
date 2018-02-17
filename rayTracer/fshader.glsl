  precision mediump float;

    varying vec2 fTexCoord;

    uniform sampler2D texture;
    uniform float time;
    uniform vec2 resolution;

    struct Sphere{
        vec3 center;
        float radius;
        vec4 material;
    };

    struct Ray{
        vec4 origin;
        vec3 direction;
    };

    float sphereIntersect(Ray ray, Sphere sphere){
        vec3 rc = ray.origin.xyz - sphere.center;
        float dotP = dot(rc, ray.direction);
        float det = dotP*dotP - (dot(rc,rc) - sphere.radius*sphere.radius);

        if(det >= 0.0){
            return -dot(ray.direction, rc) - sqrt(det);
        }
        return -1.0;
    }

    vec4 diffuse(vec3 surface, vec3 center, vec4 color, vec3 lightPos, vec3 rayOrigin){
        vec3 n = normalize((surface - center));
        vec3 l = normalize(lightPos - center); // this seems wrong
        return color * max(0.0, dot(n,l));
    }

    vec4 specular(vec3 surface, vec3 center, vec4 color, vec3 lightPos, vec3 rayOrigin){
        vec3 n = normalize(surface - center);
        vec3 l = normalize(lightPos - center); // this seems wrong
        vec3 r = reflect(-l, n);
        vec3 v = normalize(rayOrigin - surface);

        return color*pow(max(dot(r,v), 0.0), 50.0);
    }

////            vec4 phongA = phong(rayOrigin.xyz + intersect * rayDir, sphere.center, diffuseLight, specularLight, lightPos, rayOrigin.xyz);
//    vec4 phong(vec3 surface, vec3 center, vec4 difColor, vec4 specColor, vec3 lightPos, vec3 rayOrigin){
//        vec3 n = normalize(surface - center);
//        vec3 l = normalize(lightPos - center); // this seems wrong
//        vec3 r = reflect(-l, n);
//        vec3 v = normalize(rayOrigin - surface);
//
//        return  (difColor * max(0.0, dot(n,l))) + (specColor * pow(max(dot(r,v), 0.0), 50.0));
//    }

    void main() {
        vec2 xy = gl_FragCoord.xy/resolution.xy;
        float ascpectRatio = resolution.x/resolution.y;
        vec4 pixel =  vec4(0.0, 0.0, 0.0, 1.0);

        // TODO - make a combined function for lighting with specular.
        // TODo - increase the quality of the reflection model
        // Todo - make the spheres mantain the materials for lighting
        // Todo - render a plane
        vec3 lightPos = vec3(cos(time)*5.0, 2.0, sin(time) -5.0);

        vec4 rayOrigin = vec4(0.0,0.0,1.5,1.0);
        vec3 rayDir = normalize(vec3((2.0*xy-1.0)*vec2(ascpectRatio, 1.0), -1.0));

        Sphere sphere = Sphere(
            vec3(-5.0, 0.0, -5.0),
            0.5,
            vec4(0.0, 0.5, 0.1, 1.0)
        );
        Sphere sphere2 = Sphere(
            vec3(5.0, 0.0, -5.0),
            0.5,
            vec4(0.0, 0.0, 1.0, 1.0)
        );
        Sphere sphere3 = Sphere(
            vec3(0.0, 0.0, -10.0),
            0.5,
            vec4(1.0, 0.0, 0.0, 1.0)
        );
        Sphere light = Sphere(
            lightPos,
            0.1,
            vec4(1.0, 1.0, 1.0, 1.0)
        );

        float intersect = sphereIntersect(Ray(rayOrigin, rayDir), sphere);
        float intersect2 = sphereIntersect(Ray(rayOrigin, rayDir), sphere2);
        float intersect3 = sphereIntersect(Ray(rayOrigin, rayDir), sphere3);
        float intersect4 = sphereIntersect(Ray(rayOrigin, rayDir), light);

        if(intersect >= 0.0){
            float distance = length(lightPos - sphere.center);
            float attentuation = 1.0/(1.0 + 0.0*distance + 0.02*distance*distance);
            vec4 diffuseColor = diffuse(rayOrigin.xyz + intersect * rayDir, sphere.center, diffuseLight, lightPos);
            vec4 specularColor = specular(rayOrigin.xyz + intersect * rayDir, sphere.center, specularLight, lightPos, rayOrigin.xyz);
//            vec4 phongA = phong(rayOrigin.xyz + intersect * rayDir, sphere.center, diffuseLight, specularLight, lightPos, rayOrigin.xyz);

//            vec4 diffuseColor = diffuse(rayOrigin.xyz + intersect * rayDir, sphere.center, diffuseLight, lightPos);
            pixel = sphere.material * (ambIns + attentuation*(diffuseColor + specularColor));
        }else if(intersect2 >= 0.0){
            vec4 diffuseColor = diffuse(rayOrigin.xyz + intersect2 * rayDir, sphere2.center, diffuseLight, lightPos);
            vec4 specular = specular(rayOrigin.xyz + intersect2 * rayDir, sphere2.center, specularLight, lightPos, rayOrigin.xyz);
            pixel = sphere2.material * ambIns + diffuseColor + specular;
        }else if(intersect3 >= 0.0){
            float distance = length(lightPos - sphere3.center);
//            float attentuation = 1.0/(1.0 + 0.0*distance + 0.0*distance*distance);
            vec4 diffuseColor = diffuse(rayOrigin.xyz + intersect3 * rayDir, sphere3.center, diffuseLight, lightPos);
            vec4 specular = specular(rayOrigin.xyz + intersect3 * rayDir, sphere3.center, specularLight, lightPos, rayOrigin.xyz);
//            pixel = sphere3.material * (ambIns + attentuation*(diffuseColor + specular));
            pixel = sphere3.material * ambIns + diffuseColor + specular;
        }else if(intersect4 >= 0.0){
            vec4 diffuseColor = diffuse(rayOrigin.xyz + intersect4 * rayDir, light.center, diffuseLight, lightPos);
            pixel = light.material + ambIns + diffuseColor;
        }

        gl_FragColor = vec4(pixel.xyz, 1.0);
    }

