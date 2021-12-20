pipeline{
    agent any 
    stages {
         stage('SCM Checkout'){
            steps {    
                    git 'https://github.com/kiemsibat/awesome-compose/tree/master/react-nginx'
                }
            }

          stage('Hello'){
            steps {    
                    sh 'ansible --version'
                    sh 'ansible-playbook --version' 
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