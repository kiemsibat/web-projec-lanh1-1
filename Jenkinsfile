pipeline{
    agent any 
    stages {

         stage('Hub-push'){
            steps {
                    withDockerRegistry(credentialsId: 'docker-hub', url: 'https://index.docker.io/v1/') {
}    
                  
                    withCredentials([usernamePassword(credentialsId: 'docker-hub-login', passwordVariable: 'password', usernameVariable: 'kiemsibat')]) {
                            sh 'docker login'
                            sh 'docker build -t kiemsibat/testhello:v10 .'
                            sh 'docker push kiemsibat/testhello:v10'
                            sh 'docker logout'
                            echo 'logout docker'
                    }
               
                }
            }
        }
    }