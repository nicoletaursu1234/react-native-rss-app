pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                sh 'yarn start && yarn test'
            }
        }
    }
    post {
        println("Tratata");
    }
}




