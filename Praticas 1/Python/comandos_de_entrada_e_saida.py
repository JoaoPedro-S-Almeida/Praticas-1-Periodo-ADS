#Primeiro programa em Python
print('Ola, mundo!')

#Variaveis numericas, logicas e strings
nome = 'Ada'
idade = 36
altura = 1.65

#Numericas
print(idade)

#Logicas
print(idade == altura)

#Strings
print(nome, idade, altura)

#Manipulacao de strings
print('A %s tem %i anos e mede %.2f metros de altura' % (nome, idade, altura))

print('Ela e a {}, com {} anos.' .format(nome, idade))

print(f'A {nome} tem {idade} anos e mede {altura}') #a mais usada, f-string

#Fatiamento de strings
nome2 = 'Ada Wong' #o indice comeca no 0, entao adiciona-se +1, i.e. ate o a de Ada, sao 4 indices
print(nome2[0:4])

print(nome2[4:])

print(nome2[:4])

#Casting - conversao de strings

idade = input('Qual sua idade?') #impossivel usar essa string para operacoes aritmeticas
idade2 = float(input('Qual a sua idade?')) #possivel usar essa string para operacoes aritmeticas - float/int

#Tamanho da string (lenght)
text = 'Ola, como vai voce?'
tamanho = len(text)
print(f'Tem exatamente {tamanho} letras')

#Teste de mesa
x = 1
y = 2
z = x + y

x = y + x
y = z - x
z = x + y
print(z) #o valor das variaveis mudam conforme elas vao sofrendo atualizacoes pelo codigo