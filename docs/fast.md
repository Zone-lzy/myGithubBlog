# 1、自增变量

![image-20210715164920008](第一季.assets/image-20210715164920008.png)

```
i=1
i=2
i=j=3
k=4+4*4=20
i=5

```

![image-20210715165203052](第一季.assets/image-20210715165203052.png)

![image-20210715170255564](第一季.assets/image-20210715170255564.png)

波兰计算器，，

![image-20210715170842535](第一季.assets/image-20210715170842535.png)

![image-20210715171658195](第一季.assets/image-20210715171658195.png)

![image-20210715171726552](第一季.assets/image-20210715171726552.png)

![image-20210715172845881](第一季.assets/image-20210715172845881.png)



# 2、单例设计模式

```
单例设计模式，即某个类在整个体系系统中只能有一个实例对象可被获取和使用的代码模式。
```

要点：

1. 是某个类 只能有一个实例

   构造器私有化。

2. 是它必须自行创建这个实例

   含有一个该类的静态变量 来保存这个唯一的实例。

3. 是它必须自行向 整个系统提供这个 实例

   对外提供获取该实例对象的 方式：

   （1）直接暴露；（2）用静态变量的 get()方法获取；



单例设计模式的几种方式：（大体分为两种）

1. 饿汉式：直接创建对象，不存在线程安全问题。
   - 直接实例化饿汉式（简洁直观）
   - 枚举式（最简洁）
   - 静态代码块饿汉式（适合复杂实例化）
2. 懒汉式：延迟创建对象 。
   - 线程不安全（适用于单线程）
   - 线程安全（适用于多线程）
   - 静态内部类形式（适用于多线程）



1、直接实例化饿汉式

```
/**
 * @author lzy
 * 饿汉式：
 * 		在类初始化的时候直接创建实例对象，不管你是否需要这个对象都会创建
 *
 * 		（1）、构造器私有化
 * 		（2）、自行创建，并且用静态变量保存
 * 		（3）、向外提供这个实例
 * 		（4）、强调这是个单例，我们可以用final修改
 */
public class Singleton1 {
	public static final Singleton1 INSTANCE = new Singleton1();
	private Singleton1() {

	}
}
```

![image-20210715181338667](第一季.assets/image-20210715181338667.png)

2、枚举饿汉式

```
/**
 * @author lzy
 * 枚举类型 ：表示该类型的对象是有限的几个
 * 我们可以限定为一个，就成了单例
 */

public enum Singleton2 {
   INSTANCE
}
```

![image-20210715181315770](第一季.assets/image-20210715181315770.png)



3、静态代码块

```
public class Singleton3 {
   public static final Singleton3 INSTANCE;
   
   static {
      INSTANCE = new Singleton3();
   }
   private Singleton3() {
      
   }
}
```

```
运用的地方，当需要在初始化的时候从外部分文件中获取时，可以在静态代码块中进行初始化
```

```
public class Singleton3 {
	public static final Singleton3 INSTANCE;
	private String info;
	static {
		Properties pro = new Properties();
		System.out.println(Singleton3.class.getClassLoader());
		try {

			pro.load(Singleton3.class.getClassLoader().getResourceAsStream("singleton123"));
		} catch (IOException e) {
			throw new RuntimeException(e);
		}

		INSTANCE = new Singleton3(pro.getProperty("info"));
	}
	private Singleton3(String info) {
		this.info = info;
	}

	public void setInfo(String info) {
		this.info = info;
	}

	@Override
	public String toString() {
		return "Singleton3{" +
				"info='" + info + '\'' +
				'}';
	}
}
```

![image-20210715211335153](第一季.assets/image-20210715211335153.png)



4、懒汉式：线程不安全（适用于单线程）

```
/**
 * @author lzy
 * 懒汉式：延迟创建实例对象
 *     1、私有构造方法
 *     2、用一个静态变量保存这个唯一的实例
 *     3、提供一个静态变量，获取这个实例对象
 */
public class Singleton4 {
   private static Singleton4 INSTANCE;
   private Singleton4() {

   }
   public static Singleton4 getIntance() throws InterruptedException {
      if(INSTANCE == null) {
         Thread.sleep(200);
         INSTANCE = new Singleton4();
      }
      return INSTANCE;
   }
}
```

```
//模拟多线程的环境
@Test
   public void test04() throws ExecutionException, InterruptedException {
/*    Singleton4 s1 = Singleton4.getIntance();
      Singleton4 s2 = Singleton4.getIntance();
      System.out.println(s1);
      System.out.println(s2);*/

      //callable接口 相对runnable接口而言运行结束之后，能够提供返回值。泛型则是返回的数据类型
      Callable<Singleton4> c1 = new Callable<Singleton4>() {
         @Override
         public Singleton4 call() throws Exception {
            return Singleton4.getIntance();
         }
      };

      ExecutorService e1 = Executors.newFixedThreadPool(2);
      Future<Singleton4> f1 = e1.submit(c1);
      Future<Singleton4> f2 = e1.submit(c1);

      Singleton4 s1 = f1.get();
      Singleton4 s2 = f2.get();

      System.out.println(s1 == s2);
      System.out.println(s1);
      System.out.println(s2);

      e1.shutdown();
   }
```

![image-20210715230813915](第一季.assets/image-20210715230813915.png)



5、懒汉式：线程安全，适用于多线程

```
//使用synchronized锁
public class Singleton5 {
   private static Singleton5 INSTANCE;
   private Singleton5() {

   }
   public static Singleton5 getIntance() throws InterruptedException {
      //判断是否为空是为了提高效率
      if(INSTANCE == null) {
         synchronized (Singleton5.class) {
            if(INSTANCE == null) {
               Thread.sleep(1000);
               INSTANCE = new Singleton5();
            }
         }
      }
      return INSTANCE;
   }
}
```

![image-20210715232518246](第一季.assets/image-20210715232518246.png)



```
//使用lock锁 -- 效果一样
public class Singleton5 {
   private static Singleton5 INSTANCE;
   private static Lock lock = new ReentrantLock();
   private Singleton5() {

   }
   public static Singleton5 getIntance() throws InterruptedException {
      lock.lock();
      try {
         if(INSTANCE == null) {
            Thread.sleep(1000);
            INSTANCE = new Singleton5();
         }
      } finally {
         lock.unlock();
      }
      return INSTANCE;
   }
}
```

6、既能保持延迟加载，又能 保持线程安全

```
/**
 * @author lzy
 * 在内部类被加载和初始化时，才创建INSTANCE实例对象
 * 静态内部类不会自动随着外部类的 加载和初始化而初始化，它是要单独去加载和初始化的
 * 因为是在内部类加载和初始化时，创建的，因此线程是安全的。
 */
public class Singleton6 {
   private Singleton6() {}
   
   public static class Inner {
      private static final Singleton6 INSTANCE = new Singleton6();
   }
   
   public static Singleton6 getInstance() {
      return Inner.INSTANCE;
   }
}
```

```
JVM内部会保证一个类的<clinit>方法在多线程环境下被正确的加锁同步，也就是说如果多个线程同时去进行“类的初始化”，那么只有一个线程会去执行类的<clinit>方法，其他的线程都要阻塞等待，直到这个线程执行完<clinit>方法。

内部类解释-文章地址：https://blog.csdn.net/qq_35590091/article/details/107348114
```



# 3、类的初始化和实例初始化等

![image-20210716004024144](第一季.assets/image-20210716004024144.png)

```
7-2-5-1-4-3-10-6-9-8
7-10-6-9-8

5-1-10-6   -9-3-2-9-8-7
9-3-2-9-8-7
```

![image-20210716004653694](第一季.assets/image-20210716004653694.png)



考点：

- 类初始化过程

```
1、一个类要创建实例需要先加载并初始化该类。
	main方法所在的类需要先加载和初始化；
2、一个子类要初始化需要先初始化父类。
3、一个类初始化就是执行<clinit>()方法；类初始化方法<clinit>()
	(1)<clinit>()方法由静态变量 显示赋值代码和静态代码块组成；
	(2)类变量显示赋值代码和静态代码块从上到下顺序执行；
	(3)<clinit>()方法只执行一次。
```



- 实例初始化过程

```
super();//构造器中，一定会存在，写或者不写，都会存在，在子类初始化中一定会调用父类的构造器。

1、实例初始化就是执行<init>()方法
	(1)<init>()方法可能重载有多个，有几个构造器就有几个<init>方法；
	(2)<init>()方法由非静态实例变量显示赋值代码和非静态代码块 、对应的构造器代码组成；
	(3)非静态实例变量显示赋值代码和非静态代码块代码从上到下执行，而对应构造器的代码最后执行；
	(4)每次创建实例对象，调用对应构造器，执行的就是对应的<init>方法；
	(5)<init>方法的首行是super()或super(实参列表),即对应父类的<init>方法；
	
```

![image-20210716012201235](第一季.assets/image-20210716012201235.png)

- 方法的重写

```
1、哪些方法不可以被重写
	(1)final方法
	(2)静态方法
	(3)private等子类中不可见方法
2、对象的多态性
	(1)子类中如果重写了父类的方法，通过子类 对象调用的一定是子类重写过的代码；
	(2)非静态方法默认的调用对象是this；
	(3)this对象在构造器或者说<init>方法中就是正在创建的对象；
```



进阶要求：

1、重写和重载的区别？Override、Overload

```
重载（Overload）是让类以统一的方式处理不同类型数据的一种手段，实质表现就是多个具有不同的参数个数或者类型的同名函数（返回值类型可随意，不能以返回类型作为重载函数的区分标准）同时存在于同一个类中，是一个类中多态性的一种表现（调用方法时通过传递不同参数个数和参数类型来决定具体使用哪个方法的多态性）。
————————————————
重写（Override）是父类与子类之间的多态性，实质是对父类的函数进行重新定义，如果在子类中定义某方法与其父类有相同的名称和参数则该方法被重写，不过子类函数的访问修饰权限不能小于父类的；若子类中的方法与父类中的某一方法具有相同的方法名、返回类型和参数表，则新方法将覆盖原有的方法，如需父类中原有的方法则可使用 super 关键字。
————————————————
版权声明：本文为CSDN博主「熊仙森」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/qunqunstyle99/article/details/81007712
```

2、Override重写的要求？

```
(1)方法名
(2)形参列表
(3)返回值类型
(4)抛出的异常列表
(5)修饰符
```



# 4、参数的传递机制

![image-20210716113059561](第一季.assets/image-20210716113059561.png)

```
1
hello
2
[2,2,3,4,5]
11
```

考点：

- 方法的参数传递机制
- String、包装类等对象的不可变性

```
方法的参数传递机制：
	(1)形参是基本数据类型
		传递数据值
	(2)实参是引用数据类型
		传递地址值
		特殊的类型：String、包装类等对象不可变性
```

![image-20210716114615135](第一季.assets/image-20210716114615135.png)



# 5、面试题--递归与迭代

![image-20210716114853977](第一季.assets/image-20210716114853977.png)

```
/**
 * @author lzy
 */
public class Recusion {
	public static void main(String[] args) {
		int a = 4;
		System.out.println(recursion(a));
	}

	public static int recursion(int lastNum) {
		if(lastNum == 0) {
			return 1;
		} else if(lastNum < 0) {
			return 0;
		}
		return recursion(lastNum-1) + recursion(lastNum-2);
	}
}
```

![image-20210716120102386](第一季.assets/image-20210716120102386.png)

![image-20210716120720765](第一季.assets/image-20210716120720765.png)

![image-20210716121349115](第一季.assets/image-20210716121349115.png)

```
	public static void main(String[] args) {
		int k = 3;
		int sum = 0,one = 1, two = 2;
		if(k == 1 || k == 2) {
			sum = k;
		} else {
			for (int i = 3; i <= k; i++) {
				sum = one + two;
				one = two;
				two = sum;
			}
		}
		System.out.println(sum);
	}
```

```
小结
方法调用自身称为递归，利用变量的原值推出新值称为迭代。
·递归
	·优点:大问题转化为小问题，可以减少代码量，同时代码精简，可读性好;
	·缺点:递归调用浪费了空间，而且递归太深容易造成堆栈的溢出。
·迭代
	·优点:代码运行效率好，因为时间只因循环次数增加而增加，而且没有额外的空间开销;
	·缺点:代码不如递归简洁，可读性好
```



# 6、成员变量和局部变量 

![image-20210716134906569](第一季.assets/image-20210716134906569.png)

```
其中初始化：i=0 ,j=1, s=1
2,1,3
1,1,2

答案：static只有一个。。。
2,1,5
1,1,5
```

考点：

1、就近原则

2、变量的分裂；

​	(1)成员变量：类变量、实例变量

​	(2)局部变量

3、非静态代码块的执行 ：每次创建实例对象都会执行

4、方法的调用规则：调用一次执行一次

![image-20210716140134880](第一季.assets/image-20210716140134880.png)

![image-20210716140415337](第一季.assets/image-20210716140415337.png)

![image-20210716140030897](第一季.assets/image-20210716140030897.png)

![image-20210716140511129](第一季.assets/image-20210716140511129.png)

![image-20210716141511880](第一季.assets/image-20210716141511880.png)

![image-20210716141548762](第一季.assets/image-20210716141548762.png)



# 7、bean的作用域

![image-20210716141919455](第一季.assets/image-20210716141919455.png)

![image-20210716142209916](第一季.assets/image-20210716142209916.png)



# 8、事务的传播属性和事务的隔离级别

事务的传播行为：当事务方法被另一个事务方法 调用时，必须指定事务应该如何传播。

![image-20210716142451767](第一季.assets/image-20210716142451767.png)

![image-20210716143019091](第一季.assets/image-20210716143019091.png)

![image-20210716144037041](第一季.assets/image-20210716144037041.png)

![image-20210716144304255](第一季.assets/image-20210716144304255.png)

![image-20210716144512018](第一季.assets/image-20210716144512018.png)

```
一、什么是幻读
在一次事务里面，多次查询之后，结果集的个数不一致的情况叫做幻读。
而多出来或者少的哪一行被叫做 幻行
```

隔离级别能够解决事务并发产生的问题，但是事务的隔离级别越高，则 性能就越差。

![image-20210716145118290](第一季.assets/image-20210716145118290.png)



# 9、解决乱码问题

1、post请求乱码问题

![image-20210716150305049](第一季.assets/image-20210716150305049.png)

![image-20210716150747911](第一季.assets/image-20210716150747911.png)

2、get请求提交方式解决乱码问题

(1)、修改tomcat配置文件信息，修改为UTF-8，字符编码方式

![image-20210716150546576](第一季.assets/image-20210716150546576.png)



# 10、简单谈谈SpringMVC的 工作流程

![image-20210716150916234](第一季.assets/image-20210716150916234.png)

![image-20210716150943540](第一季.assets/image-20210716150943540.png)

![image-20210716151024217](第一季.assets/image-20210716151024217.png)

视图解析器在springmvc.xml中

![image-20210716151228224](第一季.assets/image-20210716151228224.png)

在Handle不管是否会有异常都会返回一个ModelAndView视图。

![image-20210716151731985](第一季.assets/image-20210716151731985.png)



# 11、Mybaits中当实体类中的属性名和表中字段名不一样怎么办？

三种解决方案

l、写sql语句时起别名

![image-20210716155150999](第一季.assets/image-20210716155150999.png)

2、在Mybaits的全局配置文件中，开启驼峰命名规则，默认是false不开启的 。

![image-20210716155245779](第一季.assets/image-20210716155245779.png)

3、在Mapper映射文件中resultMap来自定义映射规则 。

![image-20210716155729696](第一季.assets/image-20210716155729696.png)



# 12、linux常用服务相关命令

![image-20210717165223561](第一季.assets/image-20210717165223561.png)

![image-20210717165819497](第一季.assets/image-20210717165819497.png)

![image-20210717165350600](第一季.assets/image-20210717165350600.png)



# 13、git分支相关命令，实际应用



![image-20210717170128316](第一季.assets/image-20210717170128316.png)

平时项目中使用：切换分支命令

一步完成，创建分支并且切换过去



实际中，并行开发。解决bug，通过创建另一个分支，解决bug。还要合并到开发分支，将开发分支和线上分支保持 一致。测试分支也要。测试分支最后也要合并到开发以及线上分支 。

![image-20210717170856434](第一季.assets/image-20210717170856434.png)



# 14、Redis持久化的类型，以及区别

两种持久化类型：RDB、AOF，两种互补

RDB（Redis DataBase）和AOF（Append Only File）

![image-20210717171149456](第一季.assets/image-20210717171149456.png)

![image-20210717171225115](第一季.assets/image-20210717171225115.png)

![image-20210717171246755](第一季.assets/image-20210717171246755.png)



![image-20210717171434973](第一季.assets/image-20210717171434973.png)

![image-20210717171514052](第一季.assets/image-20210717171514052.png)

![image-20210717171532999](第一季.assets/image-20210717171532999.png)

![image-20210717171659304](第一季.assets/image-20210717171659304.png)



# 15、Myswl什么时候适合创建索引，什么时候不适合 

![image-20210717172108049](第一季.assets/image-20210717172108049.png)

 ![image-20210717172149852](第一季.assets/image-20210717172149852.png)

慢：相当于维护了两套数据。所以慢



![image-20210717172245239](第一季.assets/image-20210717172245239.png)

做分组的时候，以及做了一次排序。

![image-20210717172452318](第一季.assets/image-20210717172452318.png)

过滤性字段：比如性别等不适合创建索引，而相对于身份证号等适合创建索引。



# 16、JVM垃圾回收机制，GC发生在JVM哪部分，有几种红GC，它们的算法是什么？

![image-20210717174935557](第一季.assets/image-20210717174935557.png)

![image-20210717175009472](第一季.assets/image-20210717175009472.png)



![image-20210717175128773](第一季.assets/image-20210717175128773.png)

![image-20210717175252335](第一季.assets/image-20210717175252335.png)

1、复制算法

![image-20210717175442546](第一季.assets/image-20210717175442546.png)

![image-20210717175416319](第一季.assets/image-20210717175416319.png)

2、标记清除

![image-20210717175523645](第一季.assets/image-20210717175523645.png)

![image-20210717175540669](第一季.assets/image-20210717175540669.png)



3、标记压缩

![image-20210717175641555](第一季.assets/image-20210717175641555.png)

![image-20210717175650648](第一季.assets/image-20210717175650648.png)

在老年代中这两种算法是混合使用的，当标记清除算法多次产生了许多碎片了之后，进行标记压缩算法。



4、标记清除压缩算法

![image-20210717180230782](第一季.assets/image-20210717180230782.png)

![image-20210717180248413](第一季.assets/image-20210717180248413.png)



```
GC发生在堆中，引用计数法被淘汰了，无法收集循环引用算法，A引用 B，B引用A。所以主要有四种。
```



# 17、redis在项目中的使用场景，

老版本五种数据类型

![image-20210717181646346](第一季.assets/image-20210717181646346.png)

```
hash,当需要修改的时候，修改某个字段的时候 ，只需要修改对应的Hset。不使用字符串是因为会进行反序列和序列化，而序列化和反序列化，使用IO进行操作，增加了IO次数，降低了机器性能 。
```



# 18、Elasticsearch和solr的区别

![image-20210717181926967](第一季.assets/image-20210717181926967.png)

Lucene是信息检索程序库，而不是搜索引擎。

```
	当用户在主页上搜索关键词“华为手机”时，假设只存在正向索引（forward index），那么就需要扫描索引库中的所有文档，找出所有包含关键词“华为手机”的文档，再根据打分模型进行打分，排出名次后呈现给用户。因为互联网上收录在搜索引擎中的文档的数目是个天文数字，这样的索引结构根本无法满足实时返回排名结果的要求。
	所以，搜索引擎会将正向索引重新构建为倒排索引，即把文件ID对应到关键词的映射转换为关键词到文件ID的映射，每个关键词都对应着一系列的文件，这些文件中都出现这个关键词。
```

![image-20210717183000092](第一季.assets/image-20210717183000092.png)

![image-20210717183757962](第一季.assets/image-20210717183757962.png)

![image-20210717184002270](第一季.assets/image-20210717184002270.png)



![image-20210717183252923](第一季.assets/image-20210717183252923.png)

![image-20210717183339090](第一季.assets/image-20210717183339090.png)

![image-20210717183432602](第一季.assets/image-20210717183432602.png)

# 19、单点登录实现过程

单点登录：一处登录，多处使用

前提：单点登录，多使用在 分布式系统种。单独的Javaweb项目也可以使用，但是没有必要。

![image-20210717222452610](第一季.assets/image-20210717222452610.png)

![image-20210717222502020](第一季.assets/image-20210717222502020.png)



![image-20210717222935793](第一季.assets/image-20210717222935793.png)



![image-20210717223306566](第一季.assets/image-20210717223306566.png) 



# 20、购物车实现过程

分两个方向分析用户购物车的关系：

1、购物车跟用户的关系

- 一个用户必须对应一个购物车【一个用户不管买多少商品，都会存在属于自己的购物车】
- 单点登录一定在购物车之前

2、跟购物车有关的操作有哪些？

- 添加购物车

  - 用户未登录状态

    - 添加到什么地方，？未登录将数据保存到哪里？

      a) Redis? -----京东

      b) Cookie?  -----自己开发项目，可以存在【浏览器禁用cookie,禁用可以存在local Storage中】

  - 用户登录状态

    - Redis缓存中【读写速度快，存在数据库，会给网站性能带来负担】
    
      使用Hash存储：hset(key,field,vallue)。key:user:userId:cart。
    
      Hset(key,skuId,value)。
    
      
    
    - 保证数据的安全性，还要将数据存在数据库中【Oracle、Mysql】

- 展示购物车

  - 未登录状态

    a) 直接从cookie中取得数据展示即可

  - 登录状态
  
    用户一旦登录：必须显示数据库【redis】+cookie中的 购物车数据。
  
    a)Cookie中有三条记录
  
    b)Redis中有五条记录
  
    c)真正展示的时候应该是有八条记录



# 21、消息队列在项目中的使用

背景：在分布式项目中是如何处理高并发的

![image-20210718153815370](第一季.assets/image-20210718153815370.png)

![image-20210718153923128](第一季.assets/image-20210718153923128.png)

![image-20210718154015491](第一季.assets/image-20210718154015491.png)

![image-20210718154049687](第一季.assets/image-20210718154049687.png)

![image-20210718154127363](第一季.assets/image-20210718154127363.png)

![image-20210718154502158](第一季.assets/image-20210718154502158.png)