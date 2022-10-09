//Exercise

//1
Initialize name as String

Prompt "Plese enter your name"

CONCATE "Hello," + " name"

Display "Hello, name"

//Test Case :
- Inputs :
    - name : "name"
    - check the type of the value
    - if the input is empty
- Expected result :
    - Hello, name
--------------------------------
//2
Initialize char as String 
Initialize totalChar as Number set to 0

Prompt "Enter any word" store it in char

Iterate through the string till the end and for each character exept spaces, increment the count by 1

Display "Your word is: " + char and "it is consist of " totalChar " characters".

//Test Case
- Inputs :
    - the spaces
    - check the character without numbers
    - if the input empty, and the user press Enter
- Expected result :
    Your word is: good and it is consist of 4 characters 
----------------------------------
//3

Initialize author as String
Initialize quote as String with the format [\"quote"\]

Prompt "Enter Author name"
Prompt "Enter the quote"

Display [author] says [quote]

//Test Case
- Inputs :
    - Tittle Case for the name, first name and last name
Expected result :
    - Dalai Lama says "The purpose of our lives is to be happy"

-------------------------------

//4

Initialize noun as String
Initialize verb as String
Initialize adverb as String
Initialize adjective as String
Initialize story as String

Prompt "Enter a noun"
Prompt "Enter a verb"
Prompt "Enter a adverb"
Prompt "Enter a story"

FUNCTION checkValue (value)
    Check IF the value is not empty
    If empty, Prompt "Please input the right value"
    Check IF the value is string
    If not string, Prompt "Please input only word"
    If all conditions true go to the next step

Concate story = adjective + noun + " who " + verb + adverb

Display "It is a story about" story

Test Case
- Inputs :
    - the spaces
    - choices of words, if it's a noun, a verb, an adjective or an adverb
    - whether the verb for singular or plural nouns
    - check the character without numbers
    - if the input empty, and the user press Enter
- Expected result :
    It is a story about a red duck who sings loudly

//5

Initialize password as String
Set the chars = 0123456789abcdefghijklmnopqrstuvwxyz-_ABCDEFGHIJKLMNOPQRSTUVWXYZ"
Set passLength = 8

FUNCTION RANDOM (chars)
FOR 