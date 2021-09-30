pipeline{
    agent any 
    stages {

         stage('Hub-push'){
            steps {
//                     withDockerRegistry(credentialsId: 'docker-hub', url: 'https://index.docker.io/v1/') {
// }    
                  
                    withCredentials([usernamePassword(credentialsId: 'docker-hub-login', passwordVariable: 'password', usernameVariable: 'username')]) {
                          
                            sh 'docker build -t kiemsibat/testhello:v10 .'
                            echo 'logout docker'
                            echo '$password'
                            sh 'echo $password | docker login --username $username --password-stdin'
                            echo 'login docker'
                            sh 'docker push kiemsibat/testhello:v10'
                            sh 'docker logout'
                    }
               
                }
            }
        }
    }