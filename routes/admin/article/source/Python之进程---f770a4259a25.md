# Python之进程

### 创建一个简单进程

~~~python
from multiprocessing import Process
import time

def test():
    while True:
        print("---test---")
        time.sleep(1)

p = Process(target=test)
p.start() #让这个进程开始执行test函数里的代码

~~~



### 给进程传递参数

~~~python
from multiprocessing import Process
import os
def test(num):
        print("pid=%d,ppid=%d,,,,num=%d"%(os.getpid(), os.getppid(), num))

def main():
    p = Process(target=test, args=(100,))
    p.start()
    print("----main--pid=%d--"%os.getpid())
if __name__ == '__main__':
    main()
~~~



### join子进程

~~~python
from multiprocessing import Process
import time
import random

def test():
    for i in range(random.randint(1,5)):
        print("----%d---"%i)
        time.sleep(1)
def main():
    p = Process(target=test)
    p.start()
    p.join()#堵塞
if __name__ == '__main__':
    main()

print("----main----")

~~~

&gt; join方法的作用：**阻塞当前进程，直到调用join方法的那个进程执行完，再继续执行当前进程**





### Process子类创建进程

~~~python
from multiprocessing import Process
import time

class MyNewProcess(Process):
    def run(self):
        while True:
            print("---1----")
            time.sleep(1)


p = MyNewProcess()
p.start()

while True:
    print("---main----")
    time.sleep(1)

~~~





### 进程池

~~~python
from multiprocessing import Pool
import os
import random
import time

def worker(num):
    for i in range(5):
        print("===pid=%d==num=%d="%(os.getpid(), num))
        time.sleep(1)

#3表示 进程池中对多有3个进程一起执行
pool = Pool(3)

for i in range(10):
    print("---%d---"%i)
    #向进程池中添加任务
    #注意：如果添加的任务数量超过了　进程池中进程的个数的话，那么不会导致添加不进入
    #       添加到进程中的任务　如果还没有被执行的话，那么此时　他们会等待进程池中的
    #       进程完成一个任务之后，会自动的去用刚刚的那个进程　完成当前的新任务
    pool.apply_async(worker, (i,))


pool.close()#关闭进程池，相当于　不能够再次添加新任务了
pool.join()#主进程　创建／添加　任务后，主进程　默认不会等待进程池中的任务执行完后才结束
            #而是　当主进程的任务做完之后　立马结束，，，如果这个地方没join,会导致
            #进程池中的任务不会执行

~~~





