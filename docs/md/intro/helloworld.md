# Hello World!

## Introduction

In modern times the power of computing has grown exponentially. With such a powerful tool sitting at our fingertips, the first thing to learn is how we began.

If you are familiar with programming, then you may have heard the phrase "Hello, World!". This refers to the output of common simple program which is typically used as a environment test. It originated from the mid to late 70s and was discussed in *The C Programming Language* with the code snippit:
```c
main( ) {
    printf("hello, world\n");
}
```

## Understanding and Adjusting

Starting with such a simple piece of code may seem too simple to some but, we will go indepth into each component. By doing this, we can remove any complications included with more advanced code and completely understand the many key components found here.

With the introduction of some of components we will adjust the code to make a complete C program. Lastly, I will explain how to run this C code on your machine to take your first step into the new world.

### Entry Point and Functions

Reading this program is simlilar to reading a book in the manner in which you read top to bottom. Continuing with this coorelation, there are things found at the beginning of a program which can be initially skipped, this is similar to a book's table of contents. By using terminology found when programming, we can call the page of the book where the actual story starts, the **entry point**.

So let's look at a standard entry point of a C program: `int main()`. This is the same as the hello world program mentioned above with the addition of the keyword `int`. This line is called a **function** signature and is made up of three components: return type, name, and parameters in that order.

A function is a component of programming which takes an input and has an output. This works exactly like a mathmatical function like sin(0) = 0.

#### Naming

The name, which is the most simple part, is a identifier for the function. In the case of `int main()` the name is `main`. When writing your own functions you will replace this with a name that should relate to the purpose of the function. For example, a function that adds to two numbers could be called `add`. By using `main` on a function, we are specifying this is the function we would like to begin the program at.

#### Types

Now, we can move onto the return type. To understand return types, we must understand types. Types are keywords which specify a domain. In this case the type `int` stands for integer and defines whole numbers like ..., -2, -1, 0, 1, 2,... (we will discuss limits and other types in a later post). The return type of a function defines what the output domain is. If you use a function which the return type is of `int` then you can be sure that the output will be some whole number. For the purpose of `main`, the operating system which runs your program expects a whole number output to know if there was an error or not. If everything went okay, then the main function should output 0, if something other than 0 is outputted, then we know there was an error.


#### Parameters

Lastly, we move onto paramaters which are the inputs to the function. Paramaters are defined between the `()` and in the case of `int main()` there are no paramaters defined. If we think of a program that adds two numbers, we can declare the input as the two numbers to be added. The function definition of something like that would be `int add(int n1, int n2)`. As you can see the paramater list is a comma organized list where each item in the list is a type followed by a name. Each name, like the name of the function, is to be defined by the user. In this case I decided to go with n1 and n2 for number 1 and number 2. When we later use this function, we are forced to pass arguments for each of the paramaters in the list. Using this function would look like `add(1, 2)` and based on the name, we can expect the output should be 3.

Putting this all together, the entry point for a program is a function with the signature `int main()`. To define what a function does we append a pair of `{}` and all the lines inside make up the operation of the function.

### Printf();

Now that we understand how a function is made up, we can move on to line 2 which immediatly uses a function called `printf`. The `printf` function stands for print formatted and works as a way to type things onto the screen and has the signature `int printf ( const char * format, ... )`. You can ignore the paramater list for now and just understand that you can pass a **string** of characters plus 0 to infinitely more arguments. The string which you pass to the function is the sentence that will printed to the string. `printf` additionally returns an `int` which equals the number of characters that were printed to the screen.

With this being said, line 2 on the code is `printf("hello, world\n");`. This just makes the computer print the string `hello, world` and also move the next line due to having `\n`.

It should also be mentioned that each statment in a program should end with `;` as how `printf(...)` is followed by `;` to clarify it is a complete statement.

### Includes

Finally, to complete the program we must include at the top `#include <stdio.h>`. We will later touch on how includes work but, this just gives us a list of functions from the standard IO (stdio) file. We must do this as by default, C is unsure what `printf` is until we include that functionality.

### Putting it together

With all these parts in mind you should be able to quickly read and fully understand the finalized program:

```c
#include <stdio.h>                  /* --> Includes printf (and more) functions */

int main()                          /* --> Function signature */
{                                   /* --> Begin function */
    printf("hello, world\n");       /* --> Call printf */
}                                   /* --> End function */
```

## Running

As for running there are two main components you will need, a text editor and a compiler. 

When it comes to an editor there are many choices with varying assistance given to you. For example, some may do nothing (notepad), some may give you some code highlighting (notepad++), and some will give you autocompletion features. A compiler is the program which converts your text into an executable program. Compilers are an indepth topic which we will discuss in other posts, but this is all you need to know about them for now.

For those that want the top of the line experience, an integrated development environment (IDE) is the best option. An IDE combines a high end editor and compiler which is typically catered for the language you are trying to program in. Some IDE's can be daunting at first with the amount of tools available, but I would recommend getting accustomed to them as they are standard tools used in the work place.

Due to the high number of options available and platform dependencies, I will briefly give some recommendations, links, and tips on how to use some of the systems. Keep in mind, I am most familiar with Windows, but have knowledge over other Operating Systems.


> :Tabs
> > :Tab title=Windows
> > 
> > > ### Windows
> > > 
> > > For Windows you have two main routes you can take depending on the experience you want. Personally, I have both available to me depending on the requirements of the project I have at hand. At this level I only recommend using one or the other just to get comfortable.
> > > 
> > > The two routes are either using something to emulate a Linux like environment on your system or using an IDE like Visual Studio which comes with a compiler. This is because there is no great way to get a compiler working in Windows without an IDE doing all the work for you.
> > > 
> > > #### Emulating Linux
> > > 
> > > Fore Warning: This is more hands on than the other option, but will teach you some ins-and-outs of how things like Linux and compiling work.
> > > 
> > > Again, this also splits into two main options, Cygwin or Windows substem for Linux (WSL). I highly recommend WSL as it is by Microsoft and works very well, the downside of WSL is it only supports Windows 10.
> > > 
> > > When getting WSL just follow [this](https://docs.microsoft.com/en-us/windows/wsl/install-win10) link and follow the steps it explains. I would recommend Ubuntu as a choice for distro.
> > > 
> > > [Cygwin](https://www.cygwin.com/) also includes all the steps to install.
> > > 
> > > Once you get your Linux enviroment working there are some commands to learn. When you start it you should see an area to type commands which allow you to navigate directories and run programs. The few you will need to know is `ls` which **lists** all the files and directories in the directory you are in and `cd home` which **changes directory** to, in this case, home. As for going to a parent directory you can use `cd ..` as .. is the keyword for parent. Furthermore, `touch helloworld.c` is a useful command for creating a file in the current directory, in this case we created a file called helloworld.c.
> > > 
> > > Moving onto the editor, I would highly recommend Visual Studio Code (not to be confused with Visual Studio). This editor is very powerful, lightweight, and has many optional plugins for the perfect experience. Notepad++ is also a great option if you choose not to use Visual Studio Code. There are many editors I could list here such as Atom, but these are the two I have used in the past.
> > > 
> > > One great feature of WSL mixed with Visual Studio Code is that we can use the command `code .` in WSL and it will automatically start Visual Studio Code in the directory you are at. I use use this feature heavily as it saves a lot of time in the long run.
> > > 
> > > When you have your enviroment ready, all you have to do is create a file and write the code into it. Now using your new commandline, navigate to the folder with the file and run `gcc helloworld.c -o helloworld`. The Gnu Compiler Collection (**GCC**) is the compiler of choice in Linux and it requires the name of a file to compile, in the example we compiled helloworld.c. Additionally we added the -o option which stands for output, the following word names the output executable. To then run the executable we use the command `./helloworld`. The ./ is used to identify in the current directory, run helloworld.
>
> > :Tab title=Linux
> >
> > > ### Linux