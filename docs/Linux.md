# Linux
## Linux云服务器

简介

[腾讯云](https://www.runoob.com/linux/linux-cloud-server.html#tx)：腾讯云目前活动多一些，性价比也高，[ **直达链接** ](https://curl.qcloud.com/AbZapp4Q)

**如果需要购置海外服务器（国内要备案），可以点击：**[ https://curl.qcloud.com/5C1FtZ3S](https://curl.qcloud.com/5C1FtZ3S)**。**

[阿里云](https://www.runoob.com/linux/linux-cloud-server.html#ali)：折扣力度也很大，[ **直达链接** ](https://www.aliyun.com/minisite/goods?userCode=i5mn5r7m)。

[华为云](https://www.runoob.com/linux/linux-cloud-server.html#hw)：领券购买也很划算，[ **直达链接** ](https://activity.huaweicloud.com/cps/recommendstore.html?fromacct=f3797f3d-4da5-4a2f-9149-130ad807c940&utm_source=dGlhbnFpeGlu=&utm_medium=cps&utm_campaign=201905)。

## Linux系统启动过程

### 内核的引导

当计算机打开电源后，首先是BIOS开机自检，按照BIOS中设置的启动设备（通常是硬盘）来启动。

操作系统接管硬件以后，首先读入 /boot 目录下的内核文件  

![bg2013081702](https://cdn.jsdelivr.net/gh/oyw6719119/gitbookpig/bg2013081702.png)

运行init

init 进程是系统所有进程的起点，你可以把它比拟成系统所有进程的老祖宗，没有这个进程，系统中任何进程都不会启动。

init 程序首先是需要读取配置文件 /etc/inittab。 

![bg2013081703](https://cdn.jsdelivr.net/gh/oyw6719119/gitbookpig/bg2013081703.png)

#### 运行级别

许多程序需要开机启动。它们在Windows叫做"服务"（service），在Linux就叫做"守护进程"（daemon）。

init进程的一大任务，就是去运行这些开机启动的程序。

但是，不同的场合需要启动不同的程序，比如用作服务器时，需要启动Apache，用作桌面就不需要。

Linux允许为不同的场合，分配不同的开机启动程序，这就叫做"运行级别"（runlevel）。也就是说，启动时根据"运行级别"，确定要运行哪些程序。  

![bg2013081704](https://cdn.jsdelivr.net/gh/oyw6719119/gitbookpig/bg2013081704.png)

Linux系统有7个运行级别(runlevel)：

* 运行级别0：系统停机状态，系统默认运行级别不能设为0，否则不能正常启动

* 运行级别1：单用户工作状态，root权限，用于系统维护，禁止远程登陆
* 运行级别2：多用户状态(没有NFS)
* 运行级别3：完全的多用户状态(有NFS)，登陆后进入控制台命令行模式
* 运行级别4：系统未使用，保留
* 运行级别5：X11控制台，登陆后进入图形GUI模式
* 运行级别6：系统正常关闭并重启，默认运行级别不能设为6，否则不能正常启动





## Linux系统目录结构

![d0c50-linux2bfile2bsystem2bhierarchy](https://cdn.jsdelivr.net/gh/oyw6719119/gitbookpig/d0c50-linux2bfile2bsystem2bhierarchy.jpg)

## 文件基本属性

