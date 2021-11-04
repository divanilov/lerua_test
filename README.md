# Test Microservice

## HowTo run local develop:
1. Check (install) **`docker`** and **`docker-compose`**
    ```$bash
    $> docker --version
    Docker version 19.03.8, build afacb8b
    
    $> docker-compose -version
    docker-compose version 1.25.4, build 8d51620a
   
2. Install Node dependencies:
    ```$bash
    $> npm install

3. Check config file at
    ```$bash
    src/config/configuration.ts

4. Start service
    ```$bash
    $> docker-compose -f docker-compose.dev.yml up
   
## Run test
To run tests
```$bash
$> docker-compose -f docker-compose.test.yml up