#Calculador de preco de aluguel de carro
kms = float(input('Quantos quiilometros foram percorridos? '))
dias = int(input('Por quantos dias foi alugado? '))
preco = 60 * dias + 0.15 * kms

print(f'Voce deve pagar R${preco}, pois andou por {dias} dias e rodou por {kms} quilometros!')

print('O preco por dia e de R$60, e ha um acrescimo de R$0,15 por quilometro.')