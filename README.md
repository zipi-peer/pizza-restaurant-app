start:
Creating a DoughChef object in the index.ts file
The object is initialized in an array of worker type objects,
and from an array of order type objects.
Inside the constructor in the DoughChef class, the sent values are initialized,
And an object of the ToppingChef class type is created.
And a function listening to events called ListenToEvents is activated there.

process 1:
Explanation of the ListenToEvents function:
inside a setInterval that listens every given second.
Checking if the order queue is not empty:
goes through all the chefs of this process, and checks if something is available,
if available,
Pulls the order from the queue.
and changes the variable of the chef to isAvailble=false - which means that it is currently no longer available.
Updating the start date of the order process
, also checking whether this is the first order in the process, which lists how many orders there are and updates her in the department variable.
Then sends to the execution function of the process called MakeDought.
If the queue is empty i.e. there are no more orders,
Deletes the event listening.

Explanation of the MakeDought function:
Activating setInterval for the process according to the time allocated to the process,
After finishing the process inside the setInterval:
pushing the order to the queue of the next process,
The variable update that the chef has finished the process,
Deleting the process.
 
 process:2
The same code also in the ToppingChef process
Apart from updating the start date of the process which was not done.
And the budgeting of the process time according to the size of the set of additions.

process:3
The same code also in the Oven process
Apart from updating the start date of the process which was not done.

process:4
The same code also in the Oven Serving
Apart from updating the start date of the process which was not done.
and additional additions,
There are three additional class values, explanation:
StartBacking-takes its start time from the first order in order to calculate at the end, the total start time of all orders.
CountOrders - Count each order processed
OrdersLength- receives from the first order the amount of orders in the array
and prints a start and end time for each process
and checks on each process if OrdersLength==CountOrders
if held,
Prints the start and end time of the entire general process.


