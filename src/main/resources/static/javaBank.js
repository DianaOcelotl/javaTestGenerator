window.JAVA_BANK = {
    "Variables/Types":[
        [
            "Declaring a variable",
            "Declare a variable called myNum of type int.",
            "int myNum;"
        ],
        [
            "Declaring a variable",
            "Declare a variable of type double called amount and set it equal to 15.25",
            "double amount = 15.25;"
        ],
        [
            "Boolean variables",
            "Declare the variable called isHungry to true.",
            "boolean isHungry = true;"
        ],
        [
            "Boolean variables",
            "Declare the variable called isHungry to false.",
            "boolean isHungry = false;"
        ],
        [
            "Syntax",
            "What is missing from the following declaration: int = 2",
            ";"
        ],
        [
            "Strings",
            "Declare a variable of type String called chat and set it equal to 'hello everyone!'",
            "String chat = \"Hello everyone!\";",
        ],
        [
            "char",
            "The variable \"c\" should be declared as what type?",
            "char"
        ],
        [
            "String",
            "The variable \"cat\" should be declared as what type?",
            "String"
        ]
    ],
    "Conditionals":[
        [
            "Output",
            "if(3 > 10)\n\tSystem.out.print(\"Value is greater than 10\");\nelse\n\t\"Value is less than 10\";\nWhat is the output?\"",
            "Value is less than 10"
        ],
        [
            "Output",
            "What is the output of the following statement? Assume x=5, y=2, z=10, and temp=0.\n" +
            "if(y >= x)\n" +
            "\ty=z;\n" +
            "System.out.println(x+” “ +y+ “ “ + z);\n" +
            "What is the output?",
            "5 2 10"
        ],
        [
            "Output",
            "int b = 4;\n" +
            "if(b<2)\n" +
            "\tSystem.out.println(“fun”);\n" +
            "else if(b<4)\n" +
            "\tSystem.out.println(“jump”);\n" +
            "else if(b<8)\n" +
            "\tSysten.out.println(three);\n" +
            "What is the output?",
            "three"
        ],
        [
            "Output",
            "int g=10;\n" +
            "if(g<100){\n" +
            "\tif(g<50)" +
            "\t\tSystem.out.println(“low”);\n" +
            "\telse if(g==50)\n" +
            "\t\tSystem.out.println(“mid”);\n" +
            "\telse if(g>50)\n" +
            "\t\tSystem.out.println(high);\n" +
            "}else if(g>100)\n" +
            "\tSysten.out.println(greater than 100);\n" +
            "What is the output?",
            "low"
        ],
        [
            "Output",
            "int c = 1;\n" +
            "int d = 12;\n" +
            "if(a>7 && b>7)\n" +
            "\tSystem.out.println(“both numbers are > 7”);\n" +
            "System.out.print(“both numbers are not > 7”);",
            "both numbers are not > 7"
        ],
        [
            "Output",
            "int x=3, y=11, z=1;\n" +
            "if(x<y)\n" +
            "\tz=10;\n" +
            "else\n" +
            "\tz=5;\n" +
            "System.out.println(z);\n" +
            "What is the output?",
            "10"
        ],
        [
            "Output",
            "String name = \"Shelby\";\nif(name.equals(\"Shelby\"))\n\tSystem.out.println(\"A match!\");\nelse{\n\tSystem.out.println(\"Not a match.\");\n}",
            "A match!"
        ],
        [
            "Output",
            "int num=7;\nif(num%2==0)\n\tSystem.out.print(\"Even\");\nelse\n\tSystem.out.println(\"odd\");\n}",
            "odd"
        ]
    ],
    "Loops":[
        [
            "Do-While",
            "int count = 10;\ndo{\n\tSystem.out.println(count + \" \");\n\tcount++;\t}while(count<5);\nWhat would this print?",
            "10"
        ],
        [
            "Output",
            "int count = 0;\n" +
            "while(count<3){\n" +
            "\tcount++;\n" +
            "\tSystem.out.print(count + “ ”);\n" +
            "}\n" +
            "What is the output?",
            "1 2 3"
        ],
        [
            "Output",
            "int num = 1;\n" +
            "while(num<11){\n" +
            "\tnum++;\n" +
            "\tSystem.out.print(number + “ ”);\n" +
            "}\n" +
            "System.out.print(“Done”);\n" +
            "What is the output?",
            "2 3 4 5 6 7 8 9 10 11 Done"
        ],
        [
            "Output",
            "When the following code is executed, how many iterations of the loop will be performed?\n" +
            "int count = 0;\n" +
            "int number = 2;\n" +
            "boolean done = false;\n" +
            "while(!done){\n" +
            "\tnumber = number*2;\n" +
            "\tif(number>64)\n" +
            "\t\tdone=true;\n" +
            "\tcount++;\n" +
            "}",
            "6"
        ],
        [
            "Output",
            "int x=2;\n" +
            "while(x<=25){\n" +
            "\tx=2*x;\n" +
            "}\n" +
            "System.out.println(x);\n" +
            "What is the output?",
            "32"
        ],
        [
            "Output",
            "count = 0;\n" +
            "while(count<5){\n" +
            "\tSystem.out.print(“Hello”);\n" +
            "\tcount++;\n" +
            "}\n" +
            "What is the output?",
            "HelloHelloHelloHelloHello"
        ],
        [
            "Output",
            "For(int i =0; i<=10;i+=2){\n\tSystem.out.print(i + \" \");\n}",
            "0 2 4 6 8 10"
        ],
        [
            "Output",
            "int sum=0;\nfor(int i =1; i<=4; i++){\n\tsum += i;\n}\nSystem.out.println(sum);",
            "10"
        ]
    ],
    "Arrays":[
        [
            "Creating an array",
            "Create an array of 3 Cats named myPets.",
            "Cats[] myPets = new Cats[3];"
        ],
        [
            "Output",
            "int[] vals = {7,5,3,9,0,37,93,16,68,6,99};\n" +
            "System.out.println(vals[0]);\n" +
            "What is the output?",
            "7"
        ],
        [
            "Output",
            "int[] vals = {7,5,3,9,0,37,93,16,68,6,99};\n" +
            "System.out.println(vals.length);\n" +
            "What is the output?",
            "11"
        ],
        [
            "Code",
            "Write a statement that displays the value stored in in the third position of the array scores.",
            "System.out.println(scores[2]);"
        ],
        [
            "Output",
            "int[][] matrix = new int[4][8];\n" +
            "for(int row=0; row<matrix.length; row++){\n" +
            "\tfor(int column =0; column<matrix[row].length; column++){\n" +
            "\t\tmatrix[row][column]=row*column+column/2+row*(column+1);\n" +
            "\t}\n" +
            "]\n" +
            "int val = matrix[2][0]+matrix[0][0];\n" +
            "System.out.print(val);\n" +
            "What is the output?",
            "2"
        ],
        [
            "Output",
            "int[] vals = {72,31,52,89,60,77,59,94,24,4,17,97};\nSystem.out.println(vals[vals.length-1]);\nWhat is the output?",
            "97"
        ],
        [
            "Output",
            "int[] vals = {30,78,65,31,21,74,42,63,77};\nvals[7] = 80;\nSystem.out.println(vals[7]);\nWhat is the output?",
            "80"
        ],
        [
            "Output",
            "int[] nums = {89,27,90,74};\nint sum=0;\nfor(int n:nums){\n\tsum += n;\n}\nSystem.out.println(sum);\nWhat is the output?",
            "280"
        ]
    ]
};