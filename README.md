# Decoder-Ring

Site deployed via Netlify: https://vermillion-pika-ec88e2.netlify.app/

The Caesar shift is a type of substitution cipher originally used by Julius Caesar to protect messages of military significance. It relies on taking the alphabet and "shifting" letters to the right or left, based on the typical alphabetic order.

For example, if you were to "shift" the alphabet to the right by 3, the letter A would become D.

When decoding the message, you need to know the number the original message was shifted by so that you can shift in the opposite direction.

Polybius square
  1 2	3	4	  5
1	A	B	C	D	  E
2	F	G	H	I/J	K
3	L	M	N	O	  P
4	Q	R	S	T  	U
5	V	W	X	Y	  Z
The Polybius square is a cipher that is achieved by arranging a typical alphabet into a grid. Each letter is represented through a coordinate. For example, in the above table, the letter B would be represented by the numerical pair 21.



The substitution cipher requires a standard alphabet and a substitution alphabet. Letters from the standard alphabet will be transposed to the standard alphabet. This cipher requires that the recipient have the substitution alphabet, otherwise it will be difficult for them to decode the message.

a b c d e f g h i j k l m n o p q r s t u v w x y z
x o y q m c g r u k s w a f l n t h d j p z i b e v

For example, above, the word HELLO would be translated as follows:

H becomes R.
E becomes M.
L becomes W.
O becomes L
