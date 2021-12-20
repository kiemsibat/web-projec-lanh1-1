pipeline{
    agent any 
    stages {
         stage('SCM Checkout'){
            steps {    
                    git 'https://github.com/kiemsibat/web-projec-lanh1.git'
                }
            }

        stage('Hello'){
            steps {    
                    sh 'ansible --version'
                    sh 'ansible-playbook --version' 
                    
                }
            steps {                   
                    withCredentials([usernamePassword(credentialsId: 'docker-hub-login', passwordVariable: 'password', usernameVariable: 'username')]) {

                            sh 'docker build -t kiemsibat/testhello:v10 .'         
                            echo '$password'
                            sh 'echo $password | docker login --username $username --password-stdin'
                            echo 'login docker'
                            sh 'docker push kiemsibat/testhello:v10'
                            sh 'docker logout'
                            echo 'logout docker'
                    }
               
                }
            }
            
        stage('Executed Ansible'){
            steps {   
                ansiblePlaybook credentialsId: 'slave', disableHostKeyChecking: true, installation: 'ansible2', playbook: 'playbook.yml'
                }
            }

        //  stage('update-content'){
        //     steps {    
        //             sh 'docker-compose down'
        //             sh 'docker-compose build --no-cache'
        //             sh 'docker-compose up -d'               
        //         }
        //     }
    }
}