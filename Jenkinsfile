pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                bat 'yarn start && yarn test'
            }
        }
    }
    post {
        success {
             emailext body: 'SUCCESSFULL', 
                 to:'nicoletaursu1234@gmail.com', 
                 subject: 'Test'         
        }
        failure{
            emailext body: 'FAILURE', 
                 to:'nicoletaursu1234@gmail.com', 
                 subject: 'Test' 
        }
    }
}




