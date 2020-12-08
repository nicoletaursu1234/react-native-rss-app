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
            echo "Tratata"
        }
    }
}




