const graduateScore = function(studentScore, totalScore = 100) {
    const score = studentScore / totalScore * 100
    let graduateLetter = ""
    
    if(score < 60){
        graduateLetter = "F"
    } else if(score < 70){
        graduateLetter = "D"
     } else if(score < 80){
        graduateLetter = "C"
    } else if(score < 90){
        graduateLetter = "B"
    } else {
        graduateLetter = "A"
    }
    return `${studentScore}/${totalScore} -> You got a ${graduateLetter} (${score}%)!`
}

const studentsScores = graduateScore(100)

console.log(studentsScores)