// ~/www/bases/app/src/main/kotlin/org/example/App.kt
package org.example

fun main() {
    val number = 10
    // number = 11 // ok: nao posso reatribuir variavel assinada como val

    var textoMutavel = "Meu texto!"
    textoMutavel = "Mudei o valor agora é nosso texto!!!"

    // view >> console
    println("Hello sintaxe kotlin 2 ")
    println(number)
    println("O valor da variavel number é ${number}")
    println("O valor da var textoMutavel é ${textoMutavel}")
}
