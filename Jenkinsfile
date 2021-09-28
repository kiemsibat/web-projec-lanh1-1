pipeline{
    agent any 
    stages {
        stage('Clone'){
            steps {
                git 'https://github.com/kiemsibat/web-projec-lanh1.git'
            }
        }
         stage('Hub-Clone'){
            steps {
                    withDockerRegistry(credentialsId: 'docker-hub', url: 'https://index.docker.io/v1/') {
}
                    sh 'docker build -t kiemsibat/testhello:v10 .'
                    sh 'docker push kiemsibat/testhello:v10'
                }
            }
          }
    }