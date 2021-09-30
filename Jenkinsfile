pipeline{
    agent any 
    stages {
        // stage('Git-Clone'){
        //     steps {
        //         git 'https://github.com/kiemsibat/web-projec-lanh1.git'
        //     }
        // }
         stage('Hub-push'){
            steps {
                    withDockerRegistry(credentialsId: 'docker-hub', url: 'https://index.docker.io/v1/') {
}    
                  
                    withCredentials([usernamePassword(credentialsId: 'docker-hub-login', passwordVariable: 'password', usernameVariable: 'kiemsibat')]) {
                          sh 'docker build -t kiemsibat/testhello:v10 .'
                            sh 'docker push kiemsibat/testhello:v10'

                    }
                }
            }
        }
    }