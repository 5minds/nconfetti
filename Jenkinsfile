#!groovy

node('nconfetti') {

    stage('build') {

        sh 'node -v'
        sh 'npm prune'
        sh 'npm install'
        sh 'npm test'

    }

}
