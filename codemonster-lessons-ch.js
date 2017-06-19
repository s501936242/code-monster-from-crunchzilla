// Copyright 2012 Geeky Ventures

// Each lesson has a tutor message, the code given at the start of the
// lesson, some hiddenCode that is not shown but defines some
// convenience functions and globals, a lessonSection that is
// displayed to give a sense of where you are and progress, which
// tutorImage to display, and a check that (when it exists) will
// display a little congratulatory "You got it!" the first time that
// regex appears in the student's code.
// code, if missing, will not change the code in the box.
// hiddenCode, lessonSection, and tutorImage all will, if missing, use
// the hiddenCode from the last lesson where it was defined.
// youGotItCheck, if missing, will just not display the congrats message.
// Of these, the message is always there and the code often there.  Others
// are usually missing for most lessons.

var lessons = [{
    message: "I'm Code Monster! (点击对话框进入下一步)",
    code: "c.fillRect(20, 20, 50, 75);\n",
    lessonSection: "Getting Started",
    tutorImage: 1,
    hiddenCode: "var c = document.getElementById('pane').getContext('2d');\nfunction rgba(r,g,b,a) {return 'rgba('+[r,g,b,a].join(',')+')';}\nfunction rgb(r,g,b,a) {return 'rgb('+[r,g,b].join(',')+')';}\n\n"
}, {message: "现在我们开始学习编程! (点我点我)"}, {message: "在我的下方, 左边是 javascript 代码, 右边是代码运行结果!"}, {
    message: "你可以用 fillRect() 画一个盒子. 看到数字 50 了吗?  把它改成 150 看看?",
    code: "c.fillRect(20, 20, 50, 75);\n",
    youGotItCheck: "150",
}, {
    message: "盒子变宽了. 大家觉得改变其他数字会发生什么? 自己动手修改看看.",
    lessonSection: "Parameters and Drawing",
}, {message: "你计算出来了吗?  这些数字哪一个是让盒子远离左边，哪一个是远离上面，哪一个改变盒子宽度，哪一个改变盒子高度？"}, {message: "试着改变所有的数字 !  开始吧 !",}, {
    message: "好，现在是两个盒子. 你可以改变这些数字，让盒子变大吗?",
    code: "c.fillRect(20, 20, 50, 75);\nc.fillRect(100, 100, 60, 80);\n"
}, {message: "接下来，改变数字，让一个盒子绕另一个盒子一圈"}, {message: "然后试着改变数字，让两个盒子重合"}, {
    message: "怪物像一个正方形盒子.",
    code: "c.fillRect(20, 20, 80, 80);\n"
}, {
    message: "一个正方形有相同的宽和高.  这个盒子有相同的宽和高, 都是 80.",
    code: "c.fillRect(20, 20, 80, 80);\n"
}, {
    message: "大家看，现在代码变了，但是盒子没变!",
    code: "var size = 80;\nc.fillRect(20, 20, size, size);\n",
    lessonSection: "Variables",
}, {message: "为什么不同的代码做了同样的事?  谁知道吗?",}, {
    message: "var 意思是变量（ variable）. 现在我们创建一个变量, 叫做 <span class=tutor-code>size</span>, 设置值等于 80, 现在我们可以用 <span class=tutor-code>size</span> 替代 80. 知道为什么可以这样做吗?",
    code: "var size = 80;\nc.fillRect(20, 20, size, size);\n"
}, {message: "如果把 80 改成 220，会发生什么?"}, {message: "看!  盒子的宽和高同时改变了!"}, {message: "你能改变其他数字让盒子转个圈吗?"}, {message: "尝试让盒子变小?"}, {message: "当你把 <span class=tutor-code>size</span> 设置等于 0 发生了什么? 或者改变它大到5000?"}, {
    message: "怪兽想要两个盒子.",
    code: "var size = 80;\nc.fillRect(20, 20, size, size);\nc.fillRect(90, 90, size, size);\n"
}, {message: "两个盒子尺寸相同.  这是一个巧妙的技巧."}, {message: "你可以通过改变 <span class=tutor-code>size</span> 的值，  让两个盒子同时变大或者变小! 试着从 80 变 180!"}, {message: "你可以通过改变其他数字来移动两个盒子转圈圈?"}, {
    message: "怪兽想要更多的盒子.  三个盒子!",
    code: "var size = 80;\nc.fillRect(20, 20, size, size);\nc.fillRect(80, 80, size, size);\nc.fillRect(140, 140, size, size);\n"
}, {message: "现在大家猜猜改变 <span class=tutor-code>size</span> 的值会发生什么?",}, {
    message: "更多的盒子!  现在就试着改变size!",
    code: "var size = 80;\nc.fillRect(20, 20, size, size);\nc.fillRect(60, 60, size, size);\nc.fillRect(100, 100, size, size);\nc.fillRect(140, 140, size, size);\nc.fillRect(180, 180, size, size);\n"
}, {
    message: "噢!  颜色!  非常漂亮!",
    code: 'var size = 80;\n\nc.fillStyle = "blue";\nc.fillRect(20, 20, size, size);\n',
    lessonSection: "Color",
}, {message: '尝试更多的颜色.   "green" 或者 "purple" 或者 "gold".'}, {
    message: "两个粉红(pink)盒子怎么样?",
    code: 'var size = 80;\n\nc.fillStyle ="pink";\nc.fillRect(20, 20, size, size);\nc.fillRect(90, 90, size, size);\n'
}, {
    message: "一个粉红（pink） and 银色(silver).",
    code: 'var size = 80;\n\nc.fillStyle ="pink";\nc.fillRect(20, 20, size, size);\nc.fillStyle ="silver";\nc.fillRect(90, 90, size, size);\n'
}, {
    message: "你可以用金色（gold）银色 （silver） 盒子?  用蓝色（blue）替代粉红（pink）吗?",
    code: 'var size = 80;\n\nc.fillStyle ="pink";\nc.fillRect(20, 20, size, size);\nc.fillStyle ="silver";\nc.fillRect(90, 90, size, size);\n'
}, {
    message: "现在两个盒子有相同的颜色.  你可以把两个盒子变成不同的颜色吗?",
    code: 'var size = 80;\n\nc.fillStyle ="green";\nc.fillRect(20, 20, size, size);\n\nc.fillRect(90, 90, size, size);\n'
}, {
    message: "这是一种方式.  我喜欢红色（red）和蓝色（blue）.",
    code: 'var size = 80;\n\nc.fillStyle ="red";\nc.fillRect(20, 20, size, size);\nc.fillStyle ="blue";\nc.fillRect(80, 80, size, size);\n'
}, {
    message: "红色（Red）, 绿色（green）, 还有蓝色（blue）.  That's nice.",
    code: 'var size = 80;\n\nc.fillStyle ="red";\nc.fillRect(20, 20, size, size);\nc.fillStyle ="lime";\nc.fillRect(80, 80, size, size);\nc.fillStyle ="blue";\nc.fillRect(140, 140, size, size);\n'
}, {
    message: "哇... 还是一样的!   rgb() 是什么?",
    code: 'var size = 80;\n\nc.fillStyle ="rgb(255, 0, 0)";\nc.fillRect(20, 20, size, size);\nc.fillStyle ="rgb(0, 255, 0)";\nc.fillRect(80, 80, size, size);\nc.fillStyle ="rgb(0, 0, 255)";\nc.fillRect(140, 140, size, size);\n'
}, {
    message: "试着把 0 改成 200 左右.  并且把 255 改成 0. 这些数字在做什么?",
    code: 'var size = 80;\n\nc.fillStyle ="rgb(255, 0, 0)";\nc.fillRect(20, 20, size, size);\nc.fillStyle ="rgb(0, 255, 0)";\nc.fillRect(80, 80, size, size);\nc.fillStyle ="rgb(0, 0, 255)";\nc.fillRect(140, 140, size, size);\n'
}, {message: "算出来了吗?  rgb() 引用三原色 红（red）, 绿（green）, 还有 蓝（blue）.  数字从0到255. 所以, <span class=tutor-code>rgb(0, 255, 0)</span> 就是没有 红色（red） 和 蓝色（blue）, 只有绿色（green）!"},
    {message: "你可以通过改变数字来得到各种不同的颜色.  大家尝试一下!"},
    {message: "这有个有趣的游戏.  你能够让两个盒子有相同的颜色吗?",
        code: 'var size = 80;\n\nc.fillStyle ="rgb(0, 0, 0)";\nc.fillRect(20, 20, size, size);\nc.fillStyle ="red";\nc.fillRect(80, 80, size, size);\n',
        lessonSection: "Quiz: Color",
    }, {
        message: "你可以把两个盒子的颜色都变成蓝色（blue）吗?",
        code: 'var size = 80;\n\nc.fillStyle ="rgb(0, 0, 0)";\nc.fillRect(20, 20, size, size);\nc.fillStyle ="blue";\nc.fillRect(80, 80, size, size);\n'
    }, {
        message: "你可以计算出哪一个 rgb() 值可以使两个盒子变成黄色（yellow）吗?",
        code: 'var size = 80;\n\nc.fillStyle ="rgb(255, 0, 0)";\nc.fillRect(20, 20, size, size);\nc.fillStyle ="yellow";\nc.fillRect(80, 80, size, size);\n'
    }, {
        message: "你可以改变 rgb() 值，使它们的颜色都变成水鸭蓝（teal）吗?",
        code: 'var size = 80;\n\nc.fillStyle ="rgb(0, 0, 128)";\nc.fillRect(20, 20, size, size);\nc.fillStyle ="teal";\nc.fillRect(80, 80, size, size);\n'
    }, {
        message: "Okay, 这次有些难.  你能使两个盒子的颜色精确匹配吗?  你可以计算出哪一个 rgb() 值可以使它们都变成深红色（crimson）吗? 如果不能也别担心，接近就好!",
        code: 'var size = 80;\n\nc.fillStyle ="rgb(0, 0, 0)";\nc.fillRect(20, 20, size, size);\nc.fillStyle ="crimson";\nc.fillRect(80, 80, size, size);\n'
    }, {
        message: "好吧，这确实够难的，让我们看看谁的更接近?",
        code: 'var size = 80;\n\nc.fillStyle ="rgb(220, 20, 60)";\nc.fillRect(20, 20, size, size);\nc.fillStyle ="crimson";\nc.fillRect(80, 80, size, size);\n'
    }, {message: '你还可以尝试其它颜色，比如橄榄色"olive",紫色"purple",浅绿色"aqua", 或者你能想到的任何其他颜色，先改变第一个盒子的, 然后找到它们的 rgb 值使第二个盒子跟第一个盒子颜色一样!',}, {
        message: "rgba() 是 rgb()的一个升级版. 看看它做了什么?  它在末尾多了一个数字 0.5.  这最后一个数字的作用是什么? 试着把 0.5 变成 0.1.  或者变成 0.8.  发现有什么变化了吗?",
        code: 'var size = 80;\n\nc.fillStyle ="rgba(255, 0, 0, 0.5)";\nc.fillRect(20, 20, size, size);\nc.fillStyle ="rgba(0, 0, 255, 0.5)";\nc.fillRect(80, 80, size, size);\n',
        lessonSection: "Color and Transparency",
    }, {message: "rgba中字母a的意思是alpha (希腊字母的第一个字母；开端；最初) 取值从 0.0 (完全透明的invisible) 到 1.0 (完全实体的solid)"}, {
        message: "现在你可以通过rgba()来做更酷的事了.  看这里!  修改下面的alpha值，从 0.5 变成 0.2 或者 0.8!",
        code: 'var size = 80;\n\nc.fillStyle ="rgba(255, 0, 0, 0.5)";\nc.fillRect(20, 20, size, size);\nc.fillStyle ="rgba(0, 255, 0, 0.5)";\nc.fillRect(80, 80, size, size);\nc.fillStyle ="rgba(0, 0, 255, 0.5)";\nc.fillRect(140, 140, size, size);\n'
    }, {message: "把size的值从 80 改成 180!  当颜色重叠的时候，你会发现一些有趣的效果. 动手试试吧!",}, {
        message: "现在我们回到变量（variables）. 怪兽不喜欢重复的数字了. 你可以用 <span class=tutor-code>offset</span>来代替两个重复的数字20吗?",
        code: 'var offset = 30;\nvar size = 80;\nc.fillStyle ="lime";\nc.fillRect(20, 20, size, size);\nc.fillRect(90, 90, size, size);\n',
        lessonSection: "Operators and Assignment",
    }, {
        message: "现在改变 <span class=tutor-code>offset</span> 的值，从等于 30 变成等于 50.  看看怎么移动第一个盒子?",
        code: 'var offset = 30;\nvar size = 80;\nc.fillStyle ="lime";\nc.fillRect(offset, offset, size, size);\nc.fillRect(90, 90, size, size);\n'
    }, {
        message: "变量（Variables）可以被设置新的值.  看看offset在被第二个盒子使用之前， 是怎么被赋值成100的?",
        code: 'var offset = 30;\nvar size = 80;\nc.fillStyle ="lime";\nc.fillRect(offset, offset, size, size);\noffset = 100;\nc.fillRect(offset, offset, size, size);\n'
    }, {message: "试着移动第二个盒子.  把 100 改成 50 或者 150.",}, {message: "然后移动再移动第一个盒子看看.",}, {message: "你可以吧两个盒子移动到一起，使它们看起来像一个吗?"}, {
        message: "你还可以在变量（variable）后面加上其他数字. 看看有什么变化? 把offset 变成 <span class=tutor-code>offset = offset + 50</span>",
        code: 'var offset = 30;\nvar size = 80;\nc.fillStyle ="lime";\nc.fillRect(offset, offset, size, size);\noffset = offset + 50;\nc.fillRect(offset, offset, size, size);\n'
    }, {message: "<span class=tutor-code>offset = offset + 50</span> 的意思是 offset加上 50 然后再赋值给offset."}, {
        message: "你试一试?  你可以用一个变量来代替第二个盒子的两个数字90吗(left,top)? 提示：创建一个新变量或者改变offset，然后使用offset.",
        code: 'var offset = 30;\nvar size = 80;\nc.fillStyle ="lime";\nc.fillRect(offset, offset, size, size);\n\nc.fillRect(90, 90, size, size);\n',
        lessonSection: "Quiz: Variables and Operators",
    }, {
        message: "怪物喜欢加法.  我也喜欢.  Okay, 现在试着修改 <span class=tutor-code>offset</span> ，从 30 变成 80.  看有什么变化?",
        code: 'var offset = 30;\nvar size = 80;\nc.fillStyle ="lime";\nc.fillRect(offset, offset, size, size);\noffset = offset + 60;\nc.fillRect(offset, offset, size, size);\n'
    }, {message: "噢, 你可以同时移动两个盒子了!  改变offset,移动它们转个圈!",}, {
        message: "这个看起来很类似, 但是有一点不同.  这个 <span class=tutor-code>*</span> 符号的作用是什么?  当你把 <span class=tutor-code>* 3</span> 改成 <span class=tutor-code>* 2</span>有什么变化?  然后改成<span class=tutor-code>* 1</span>呢.  同时改变offset的值.  你能算出来 <span class=tutor-code>*</span> 的作用吗?",
        code: 'var offset = 30;\nvar size = 80;\nc.fillStyle ="lime";\nc.fillRect(offset, offset, size, size);\noffset = offset * 3;\nc.fillRect(offset, offset, size, size);\n',
        lessonSection: "More Operators",
    }, {message: "<span class=tutor-code>*</span> 的意思是乘（multiply）.  <span class=tutor-code>2 * 2</span> 等于 4.  所以, <span class=tutor-code>offset = offset * 3</span> 意味着把offset变成3倍大."}, {
        message: "<span class=tutor-code>*</span> 是乘（multiply）， <span class=tutor-code>/</span> 是除（divide）.  所以, 我们通过下面的公式给size赋值，只是以一种比较复杂的方式来使size的值等于100.  看出来了吗?",
        code: 'var size = 20 * 6 / 2 + 50 - 10;\nvar offset = 30;\nc.fillStyle ="lime";\nc.fillRect(offset, offset, size, size);\noffset = offset * 3;\nc.fillRect(offset, offset, size, size);\n'
    }, {
        message: "我们可以比较这些数字. 看见代码了吗?  只有当 <span class=tutor-code>size</span> 的值小于80的时候，我们才画第二个盒子.",
        code: "var size = 50;\n\nc.fillRect(20, 20, size, size);\nif (size < 80) {\n  c.fillRect(100, 100, size, size);\n}\n",
        lessonSection: "If and Comparisons",
    }, {message: "把size变成150.  看看有什么变化? 改成 79呢.  然后再改成 80.",}, {
        message: "Okay, 让我看看你都学到了什么!  这有两个盒子.  你能添加第三个盒子吗，使它的offset比第二个盒子多60?",
        code: 'var size = 80;\nvar offset = 20;\n\nc.fillStyle ="lime";\n\nc.fillRect(offset, offset, size, size);\noffset = offset + 60;\nc.fillRect(offset, offset, size, size);\n',
        lessonSection: "Quiz: Variables and Color",
    }, {
        message: "这是一种实现它的方式. 改变 size 和 offset看看!",
        code: 'var size = 80;\nvar offset = 20;\n\nc.fillStyle ="lime";\n\nc.fillRect(offset, offset, size, size);\noffset = offset + 60;\nc.fillRect(offset, offset, size, size);\noffset = offset + 60;\nc.fillRect(offset, offset, size, size);\n'
    }, {
        message: "还记得 rgba()吗?  怪兽很喜欢.  你可以让三个盒子的颜色都不相同吗?",
        code: 'var size = 80;\nvar offset = 20;\n\nc.fillStyle ="rgba(0, 0, 255, 0.5)";\nc.fillRect(offset, offset, size, size);\noffset = offset + 60;\nc.fillStyle ="rgba(0, 0, 255, 0.5)";\nc.fillRect(offset, offset, size, size);\noffset = offset + 60;\nc.fillStyle ="rgba(0, 0, 255, 0.5)";\nc.fillRect(offset, offset, size, size);\n'
    }, {
        message: "下面是一种实现方式.  Ooo!  Pretty!  改变 size, offset, 或者 red, blue, 和 green 的数值!",
        code: 'var size = 80;\nvar offset = 20;\n\nc.fillStyle ="rgba(0, 0, 255, 0.5)";\nc.fillRect(offset, offset, size, size);\noffset = offset + 60;\nc.fillStyle ="rgba(0, 255, 0, 0.5)";\nc.fillRect(offset, offset, size, size);\noffset = offset + 60;\nc.fillStyle ="rgba(255, 0, 0, 0.5)";\nc.fillRect(offset, offset, size, size);\n'
    }, {
        message: "怪兽不喜欢重复的代码敲好几遍.  这里有很多相同的代码出现了不止一次, 我不喜欢.",
        code: 'var size = 80;\nvar offset = 20;\n\nc.fillStyle ="blue";\n\nc.fillRect(offset, offset, size, size);\noffset = offset + 40;\nc.fillRect(offset, offset, size, size);\noffset = offset + 40;\nc.fillRect(offset, offset, size, size);\n',
        lessonSection: "For Loops",
    }, {
        message: "这是一个 <span class=tutor-code>for</span> 的循环（loop）.  重复的代码不用写很多次了.  我喜欢.  试着把 3 改成 5!",
        code: 'var size = 80;\nvar offset = 20;\n\nc.fillStyle ="blue";\nfor (var i = 0; i < 3; i = i + 1) {\n  c.fillRect(offset, offset, size, size);\n  offset = offset + 40;\n}\n',
    }, {
        message: "For 循环（loops） 有三个部分, 从哪里开始 (<span class=tutor-code>i = 0</span>), 什么时候继续 (<span class=tutor-code>i < 5</span>), 还有每次改变多少 (<span class=tutor-code>i = i + 1</span>). 你可以做十个盒子吗?",
        code: 'var size = 80;\nvar offset = 20;\n\nc.fillStyle ="blue";\nfor (var i = 0; i < 5; i = i + 1) {\n  c.fillRect(offset, offset, size, size);\n  offset = offset + 40;\n}\n',
    }, {
        message: "啊哈!  超出去了?  怎么让十个盒子不超出去呢?",
        code: 'var size = 80;\nvar offset = 20;\n\nc.fillStyle ="blue";\nfor (var i = 0; i < 10; i = i + 1) {\n  c.fillRect(offset, offset, size, size);\n  offset = offset + 40;\n}\n',
    }, {
        message: "下面是一种方式!",
        code: 'var size = 80;\nvar offset = 20;\n\nc.fillStyle ="blue";\nfor (var i = 0; i < 10; i = i + 1) {\n  c.fillRect(offset, offset, size, size);\n  offset = offset + 10;\n}\n',
    }, {
        message: "小的盒子也可以.  试着修改 size, offset的值, 还有修改 10变成其他数字!",
        code: 'var size = 20;\nvar offset = 20;\n\nc.fillStyle ="blue";\nfor (var i = 0; i < 10; i = i + 1) {\n  c.fillRect(offset, offset, size, size);\n  offset = offset + 10;\n}\n',
    }, {
        message: "还记得 rgba()吗? 下面是怎么出现的?  自己动手看看!",
        code: 'var size = 50;\nvar offset = 20;\n\nfor (var i = 0; i < 10; i = i + 1) {\n  var b = i * 25;\n  var rgba = "rgba(0, 0, " + b + ", 0.5)";\n  c.fillStyle = rgba;\n  c.fillRect(offset, offset, size, size);\n  offset = offset + 20;\n}\n',
        lessonSection: "Fun with For Loops",
    }, {message: "好复杂!  它的意思是blue位置的值从 0 开始 第一个盒子是0, 第二个盒子是25, 然后 50, 75, 100..."}, {
        message: "这是另外一个, 这次我们改变的是alpha!  Neat-o!（Cool）",
        code: 'var size = 50;\nvar offset = 20;\n\nfor (var i = 0.1; i < 0.5; i = i + 0.05) {\n  var rgba = "rgba(0, 0, 255, " + i + ")";\n  c.fillStyle = rgba;\n  c.fillRect(offset, offset, size, size);\n  offset = offset + 20;\n}\n'
    }, {
        message: "能让我看看你学到了什么吗?  画一个正方形（square）! 提示: 记住用 <span class=tutor-code>c.fillRect(<i>left, top, width, height</i>);</span> 去画一个盒子.",
        code: "",
        lessonSection: "Quiz: Write Code Yourself",
    }, {message: "可以添加另外的正方形（square）吗?"}, {message: '现在我们把第二个正方形（square）变成红色（red）? (提示: <span class=tutor-code>c.fillStyle = "blue";</span> 放 fillRect() 前面使矩形（rect）变蓝色（blue）)'}, {
        message: "非常棒! 你可以得到这样的结果吗? 如果没有, 试着改变那些数字看它们是怎么工作的!",
        code: 'c.fillRect(10, 10, 20, 20);\nc.fillStyle = "red";\nc.fillRect(50, 50, 100, 100);\n'
    }, {
        message: "怪兽画了一条先. 你觉得moveTo()做了什么? lineTo()呢? 把 20 改成 50.",
        code: "c.beginPath();\nc.moveTo(30, 20);\nc.lineTo(120, 40);\nc.stroke();\n",
        lessonSection: "Lines",
    }, {message: "改变其他数字看看.  你能计算出 moveTo() 和 lineTo() 的作用吗?"}, {message: "moveTo(left, top) 把笔移动到画线的起点.  lineTo(left, top) 所画的线的终点.",}, {
        message: "这里可以看到第二个lineTo()的效果.  第二条线的起点，是第一条线的终点.",
        code: "c.beginPath();\nc.moveTo(30, 20);\nc.lineTo(120, 40);\nc.lineTo(120, 150);\nc.stroke();\n"
    }, {message: "所以, 我们画了一条路径, 把所有线都连接到了一起.  我们从beginPath()开始一条路径，用 stroke()画任何的东西."}, {
        message: "如果我们放一个 moveTo() 在第二个lineTo()前面, 我们只是移动了笔，但是没有画任何东西.  看到了吗?",
        code: "c.beginPath();\nc.moveTo(30, 20);\nc.lineTo(120, 40);\nc.moveTo(120, 60);\nc.lineTo(120, 150);\nc.stroke();\n"
    }, {
        message: "试一下这个!  添加另一条线, 在第一个c.lineTo()后面写下第二个c.lineTo(50, 115).",
        code: "c.beginPath();\nc.moveTo(100, 30);\nc.lineTo(150, 115);\n\nc.stroke();\n"
    }, {
        message: "是你预料的结果吗?  试着添加第三条线!",
        code: "c.beginPath();\nc.moveTo(100, 30);\nc.lineTo(150, 115);\nc.lineTo(50, 115);\n\nc.stroke();\n"
    }, {message: "你可以画一个三角形（triangle）吗?",}, {
        message: "这是一个三角形（triangle）!",
        code: "c.beginPath();\nc.moveTo(100, 30);\nc.lineTo(150, 115);\nc.lineTo(50, 115);\nc.lineTo(100, 30);\nc.stroke();\n"
    }, {
        message: "Okay, 一个橙色（orange）三角形（triangle）.  好像蓝色（blue）看起来更好. 可以把它变成蓝色（blue）吗?",
        code: 'c.beginPath();\nc.strokeStyle = "orange";\nc.moveTo(100, 30);\nc.lineTo(150, 115);\nc.lineTo(50, 115);\nc.lineTo(100, 30);\nc.stroke();\n'
    }, {
        message: "我想画两个三角形（triangles）, 但是忘了一个moveTo().  看看发生了什么?",
        code: "c.beginPath();\nc.moveTo(100, 30);\nc.lineTo(150, 115);\nc.lineTo(50, 115);\nc.lineTo(100, 30);\n\nc.lineTo(250, 215);\nc.lineTo(150, 215);\nc.lineTo(200, 130);\nc.stroke();\n"
    }, {message: "这样可不行.  你可以添加 <span class=tutor-code>c.moveTo(200, 130);</span> 使两个三角形（triangles）分开吗?",}, {
        message: "我想要很多的三角形（triangles）. 我们需要用<span class=tutor-code>for</span>!  这个for循环（loop） 画了两个三角形（triangles）.",
        code: "c.beginPath();\nfor (var i = 30; i <= 60; i = i + 30) {\n  c.moveTo(70 + i, i);\n  c.lineTo(120 + i, 85 + i);\n  c.lineTo(20 + i, 85 + i);\n  c.lineTo(70 + i, i);\n}\nc.stroke();\n",
        lessonSection: "Lines and Loops",
    }, {message: "这个for循环loop从30开始，并且每次增加（increases）30.  所以, 直到它被通知停止, 它的变化是 30, 60, 90, 120...  现在, 这个for循环（loop）被告知到60就停止."},
    {message: "所以, 你能让这个for循环（loop）画（draw）三个三角形（triangles）吗? 5（Five）个哦?",},
    {message: "你可以通过改变循环来产生更多的三角形吗?  如果每次增加10呢, 它的值是30, 40, 50, 60... 试试看?",}, {
        message: "Aieee!  Look at this!  四十个三角形!",
        code: 'c.strokeStyle = "green";\nc.beginPath();\nfor (var i = 10; i <= 210; i = i + 5) {\n  c.moveTo(70 + i, i);\n  c.lineTo(120 + i, 85 + i);\n  c.lineTo(20 + i, 85 + i);\n  c.lineTo(70 + i, i);\n}\nc.stroke();\n'
    }, {message: "让它变更多!  改变它的颜色（color）?  你能生成更多的三角形（triangles）吗?",}, {
        message: "两个盒子, 一个使用了strokeRect(), 另一个用了四条线.",
        code: "var size = 100;\n// First box\nc.strokeRect(30, 30, size, size);\n// Second box\nc.beginPath();\nc.moveTo(80, 80);\nc.lineTo(80 + size, 80);\nc.lineTo(80 + size, 80 + size);\nc.lineTo(80, 80 + size);\nc.lineTo(80, 80);\nc.stroke();\n",
        lessonSection: "Coding It Easy",
    }, {
        message: "你能通过画线的方式，添加一些代码来画第三个盒子吗?",
        code: "var size = 100;\n// First box\nc.strokeRect(30, 30, size, size);\n// Second box\nc.beginPath();\nc.moveTo(80, 80);\nc.lineTo(80 + size, 80);\nc.lineTo(80 + size, 80 + size);\nc.lineTo(80, 80 + size);\nc.lineTo(80, 80);\nc.stroke();\n// Third box?\n"
    }, {
        message: "strokeRect()更简单（easier）, 是不是?  这里有用strokeRect()画的三个盒子. 你可以添加第四个吗?",
        code: "var size = 100;\n\nc.strokeRect(30, 30, size, size);\nc.strokeRect(80, 80, size, size);\nc.strokeRect(130, 130, size, size);\n"
    }, {
        message: "想要更多的盒子? 复制更多的代码吗.  Yuck-o.",
        lessonSection: "Avoid Repeating Code",
    }, {
        message: "我知道!  用for循环（loop）!  你可以为编码怪兽生成更多的盒子吗?",
        code: "var size = 100;\n\nfor (var x = 30; x <= 80; x = x + 50) {\n  c.strokeRect(x, x, size, size);\n}\n"
    }, {message: "可以生成超过十个盒子吗?  并且保证所有的盒子都能在屏幕上可以看到?",}, {
        message: "现在可以更简单的生成更多的盒子了? 为什么呢?",
        code: "var size = 100;\nvar num = 3;\nvar offset = 30;\n\nfor (var i = 1; i <= num; i = i + 1) {\n  c.strokeRect(i * offset, i * offset, size, size);\n}\n",
        lessonSection: "Variables Make It Easy Too",
    }, {message: "它的工作原理是 <span class=tutor-code>i</span> 从1递增 1, 2, 3... 然后通过<span class=tutor-code>i * offset</span>设置每一个盒子的(left, top)值, 所以, 因为 offset 是 30, 第一个盒子的left top的值是(30, 30), 第二个是(60, 60), 第三个 (90, 90) ...",},
    {message: "试着改变size, num, 还有 offset.  看看有什么变化?  开始动手!",},
    {message: "通过变量可以更好的控制参数 (像 size, num, 和 offset) 并且更容易修改.  像这样?"},
    {message: "让我看看你都学到了什么? 画一个盒子. <br>提示: <span class=tutor-code>c.strokeRect(<i>left, top, width, height</i>)</span>.",
        code: "",
        lessonSection: "Quiz: For Loops",
    }, {
        message: "现在画四个盒子. 提示: 用最简单的方法. 记住, 用for 循环（loop）像这样: <span class=tutor-code>for (var i = 0; i < 3; i += 1) {</span>",
        code: ""
    }, {message: "你写的代码可以一次性修改所有盒子的size吗? 提示: 你可以声明一个变量名 size 等于 50, 像这样 <span class=tutor-code>var size = 50;</span>"}, {
        message: "噢, 你已经在学习编程了!  很多方法可以做到这一点,但你写出这样的代码了吗?如果没有,试着改变一些东西,弄明白它是如何工作的!",
        code: "var size = 50;\n\nfor (var i = 0; i < 4; i += 1) {\n  var x = 80 + 30 * i;\n  var y = 80 + 10 * i;\n  c.strokeRect(x, y, size, size);\n}\n",
    }, {
        message: "编码怪兽不喜欢重复自我.  不喜欢.  不喜欢.  For 循环（loops）避免重复.  来，写出你们的函数. 要避免重复.",
        code: "// All work and no play\n// make monster a dull boy\n// All work and no play\n// make monster a dull boy\n// All work and no play\n// make monster a dull boy\n",
        lessonSection: "Your Own Functions",
    }, {
        message: "这是一个新的函数, strokeSquare().  它和 strokeRect()很像, 但是它是画正方形（squares）的.",
        code: "function strokeSquare(left, top, size) {\n  c.strokeRect(left, top, size, size);\n}\n\nstrokeSquare(30, 100, 50);\nstrokeSquare(10, 10, 200);\nstrokeSquare(50, 50, 10);\n"
    }, {message: "strokeSquare() 用 strokeRect() 画一个矩形（rectangle），它有相同的宽（width）和高（height）. 看看它是怎么工作的?"},
    {message: "所以, 第一个正方形从(30, 100)开始，并且它的宽和高都是50. 看见了吗?",},
    {message: "你可以在三个正方形下面画出第四个正方形吗，用strokeSquare()?",}, {
        message: "Ooo! 一个五角星! 非常漂亮! 改变一些数字!  让它变得混乱!",
        code: "c.beginPath();\nc.moveTo(50, 100);\nc.lineTo(150, 100);\nc.lineTo(65, 150);\nc.lineTo(100, 60);\nc.lineTo(135, 150);\nc.lineTo(50, 100);\nc.stroke();\n",
        lessonSection: "More Lines",
    }, {
        message: "等等, 星星不是绿色的.  可以把它变成黄色(yellow)或者金色(gold)吗?",
        code: 'c.strokeStyle = "green";\nc.beginPath();\nc.moveTo(50, 100);\nc.lineTo(150, 100);\nc.lineTo(65, 150);\nc.lineTo(100, 60);\nc.lineTo(135, 150);\nc.lineTo(50, 100);\nc.stroke();\n'
    }, {
        message: "噢! 一个实心的黄色五角星! 你也同样可以做到， 改变那些数字!  把它搞乱!",
        code: 'c.fillStyle = "gold";\nc.beginPath();\nc.moveTo(50, 100);\nc.lineTo(150, 100);\nc.lineTo(65, 150);\nc.lineTo(100, 60);\nc.lineTo(135, 150);\nc.lineTo(50, 100);\nc.fill();\n'
    }, {
        message: "变量可以很容易地改变和画出更多的星星. 试着改变 x, y, 还有 size (或者其他任意数字)!",
        code: 'c.fillStyle = "gold";\n\nvar x = 50;\nvar y = 100;\nvar size = 100;\n\nc.beginPath();\nc.moveTo(x, y);\nc.lineTo(x + size, y);\nc.lineTo(x + size * 0.15, y + size * 0.5);\nc.lineTo(x + size / 2, y - size * 0.4);\nc.lineTo(x + size * 0.85, y + size * 0.5);\nc.lineTo(x, y);\nc.fill();\n'
    }, {
        message: "这里有两个星星, 但是重复的代码让我感觉受到了伤害. 不喜欢这样. 我们该怎么做呢?",
        code: 'c.fillStyle = "gold";\n\nvar x = 50;\nvar y = 100;\nvar size = 100;\n\nc.beginPath();\nc.moveTo(x, y);\nc.lineTo(x + size, y);\nc.lineTo(x + size * 0.15, y + size * 0.5);\nc.lineTo(x + size / 2, y - size * 0.4);\nc.lineTo(x + size * 0.85, y + size * 0.5);\nc.lineTo(x, y);\nc.fill();\nx += 100;\ny += 50;\nc.beginPath();\nc.moveTo(x, y);\nc.lineTo(x + size, y);\nc.lineTo(x + size * 0.15, y + size * 0.5);\nc.lineTo(x + size / 2, y - size * 0.4);\nc.lineTo(x + size * 0.85, y + size * 0.5);\nc.lineTo(x, y);\nc.fill();\n'
    }, {
        message: "函数! 就是这个函数fillStar()! 你能添加第三个星星吗?",
        code: 'c.fillStyle = "gold";\nvar size = 100;\n\nfunction fillStar(x, y, s) {\n  c.beginPath();\n  c.moveTo(x, y);\n  c.lineTo(x + s, y);\n  c.lineTo(x + s * 0.15, y + s * 0.5);\n  c.lineTo(x + s / 2, y - s * 0.4);\n  c.lineTo(x + s * 0.85, y + s * 0.5);\n  c.lineTo(x, y);\n  c.fill();\n}\n\nfillStar(50, 100, size);\nfillStar(150, 150, size);',
        lessonSection: "More Functions",
    }, {
        message: "4个星星在同一排!  你可以把它们变成8个吗?",
        code: 'c.fillStyle = "gold";\nvar size = 40;\n\nfunction fillStar(x, y, s) {\n  c.beginPath();\n  c.moveTo(x, y);\n  c.lineTo(x + s, y);\n  c.lineTo(x + s * 0.15, y + s * 0.5);\n  c.lineTo(x + s / 2, y - s * 0.4);\n  c.lineTo(x + s * 0.85, y + s * 0.5);\n  c.lineTo(x, y);\n  c.fill();\n}\n\nfor (var i = 0; i < 4; i = i + 1) {\n  fillStar(i * size, 50, size);\n}\n',
    }, {
        message: "两个循环!  试着改变这些星星的size或者其他数字!",
        code: 'c.fillStyle = "gold";\nvar size = 40;\n\nfor (var i = 0; i < 5; i = i + 1) {\n  for (var j = 0; j < 3; j = j + 1) {\n    fillStar(i * size, j * size, size);\n  }\n}\n\nfunction fillStar(x, y, s) {\n  c.beginPath();\n  c.moveTo(x, y + s * 0.4);\n  c.lineTo(x + s, y + s * 0.4);\n  c.lineTo(x + s * 0.15, y + s * 0.9);\n  c.lineTo(x + s / 2, y);\n  c.lineTo(x + s * 0.85, y + s * 0.9);\n  c.lineTo(x, y + s * 0.4);\n  c.fill();\n}\n',
        lessonSection: "Nested Loops",
    }, {message: "你知道可以写两个循环，一个在另一个里面吗?",}, {message: "你知道它们是怎么工作的吗?",}, {
        message: "<span class=tutor-code>j</span> will count 0, 1, 2.  The first time <span class=tutor-code>j</span> counts 0, 1, 2, <span class=tutor-code>i</span> will be 0.  The next time j counts 0, 1, 2, i will be 1.",
        code: 'c.fillStyle = "gold";\nvar size = 40;\n\nfor (var i = 0; i < 5; i = i + 1) {\n  for (var j = 0; j < 3; j = j + 1) {\n    fillStar(i * size, j * size, size);\n  }\n}\n\nfunction fillStar(x, y, s) {\n  c.beginPath();\n  c.moveTo(x, y + s * 0.4);\n  c.lineTo(x + s, y + s * 0.4);\n  c.lineTo(x + s * 0.15, y + s * 0.9);\n  c.lineTo(x + s / 2, y);\n  c.lineTo(x + s * 0.85, y + s * 0.9);\n  c.lineTo(x, y + s * 0.4);\n  c.fill();\n}\n',
    }, {message: "第一个星星,是 i = 0 并且 j = 0的时候.  第二个星星, 是i = 0 并且 j = 1的时候.  第三个, 就是i = 0 并且 j = 2. 然后是 i = 1 , j = 0; i = 1 , j = 1; i = 1 , j = 2; 等等...",},
    {message: "你能弄明白它们画星星的顺序吗?  哪一个星星最先被画出来?  哪一个又是第二个被画出来的呢?",},
    {message: "第一个星星就是左上角那一个.  第二个星星就是紧跟着第一个的那一个.  知道为什么吗?",}, {
        message: "哇!  被星星填满了! 自己动手改变size!",
        code: 'c.fillStyle = "gold";\nvar size = 40;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar maxI = Math.floor(w / size);\nvar maxJ = Math.floor(h / size);\n\nfor (var i = 0; i < maxI; i = i + 1) {\n  for (var j = 0; j < maxJ; j = j + 1) {\n    fillStar(i * size, j * size, size);\n  }\n}\n\nfunction fillStar(x, y, s) {\n  c.beginPath();\n  c.moveTo(x, y + s * 0.4);\n  c.lineTo(x + s, y + s * 0.4);\n  c.lineTo(x + s * 0.15, y + s * 0.9);\n  c.lineTo(x + s / 2, y);\n  c.lineTo(x + s * 0.85, y + s * 0.9);\n  c.lineTo(x, y + s * 0.4);\n  c.fill();\n}\n',
        lessonSection: "Fun with Stars",
    }, {
        message: "哇!  5个星星, 随机的位置, 每次都是变化的. 你能用它画出50个星星吗? 一百个呢?  更大或者更小的星星呢?",
        code: 'c.fillStyle = "gold";\nvar n = 5;\nvar size = 20;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nfor (var i = 0; i < n; i = i + 1) {\n  var x = (w - size) * Math.random();\n  var y = (h - size) * Math.random();\n  fillStar(x, y, size);\n}\n\nfunction fillStar(x, y, s) {\n  c.beginPath();\n  c.moveTo(x, y + s * 0.4);\n  c.lineTo(x + s, y + s * 0.4);\n  c.lineTo(x + s * 0.15, y + s * 0.9);\n  c.lineTo(x + s / 2, y);\n  c.lineTo(x + s * 0.85, y + s * 0.9);\n  c.lineTo(x, y + s * 0.4);\n  c.fill();\n}\n',
    }, {
        message: "啊, 我看星星看累了.  这是两条分开的线. 看看有多少重复的代码? 不喜欢. 我们该怎么做呢?",
        code: "c.beginPath();\nc.moveTo(20, 20);\nc.lineTo(200, 20);\nc.stroke();\nc.beginPath();\nc.moveTo(20, 50);\nc.lineTo(200, 50);\nc.stroke();\n",
        lessonSection: "Even More Functions",
    }, {
        message: "需要一个 drawLine() 函数.  在这儿.  现在画一条线从(20, 20) 到 (200, 20) ，另一条线从 (20, 50) 到 (200, 50).",
        code: "function drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n\n"
    }, {
        message: "知道怎么做了吗? 这是一个版本.  你可以在第二条线下面画第三条线吗?",
        code: "function drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n\ndrawLine(20, 20, 200, 20);\ndrawLine(20, 50, 200, 50);\n"
    }, {
        message: "这里用循环画了三条垂直的线. 你能把它们变成10条吗?",
        code: "function drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n\nfor (var i = 0; i < 3; i = i + 1) {\n  var x = 20 + i * 30;\n  drawLine(x, 20, x, 200);\n}\n",
        lessonSection: "Fun with Lines",
    }, {
        message: "十条线有同一个终点.  试着移动这个点!",
        code: "function drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n\nvar px = 200;\nvar py = 150;\nfor (var i = 0; i < 10; i = i + 1) {\n  var y = i * 30;\n  drawLine(0, y, px, py);\n}\n"
    }, {
        message: "下面这个更难了?  这些线向右散开.  你可以在下面添加一些向左散开的线吗?",
        code: "function drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n\nvar px = 200;\nvar py = 150;\nfor (var i = 0; i < 10; i = i + 1) {\n  var y = i * 30;\n  drawLine(400, y, px, py);\n}\n"
    }, {
        message: "做到了吗?  这是一种方式.  试着移动中心点!",
        code: "function drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n\nvar px = 200;\nvar py = 150;\nfor (var i = 0; i < 10; i = i + 1) {\n  var y = i * 30;\n  drawLine(0, y, px, py);\n  drawLine(400, y, px, py);\n}\n"
    }, {
        message: "Ooo!  这个我喜欢!  试着改变 num, px, 还有 py!",
        code: "var num = 20;\nvar px = 200;\nvar py = 150;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nfor (var i = 0; i < num; i = i + 1) {\n  var y = i * h / (num - 1);\n  drawLine(400, y, px, py);\n  var x = y * w / h;\n  drawLine(x, 300, px, py);\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n"
    }, {
        message: "你可以从四面八方画线向中心点汇合吗?  你需要四个 drawLine() ，其中你新增的两个需要用 0 替代 w 和 h. 你能做到吗?",
        code: "var num = 20;\nvar px = 200;\nvar py = 150;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nfor (var i = 0; i < num; i = i + 1) {\n  var y = i * h / (num - 1);\n  drawLine(w, y, px, py);\n  var x = y * w / h;\n  drawLine(x, h, px, py);\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n"
    }, {
        message: "我喜欢我的蓝色.  动手试试看!",
        code: 'var num = 10;\nvar px = 200;\nvar py = 150;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nc.strokeStyle = "blue";\nfor (var i = 0; i < num; i = i + 1) {\n  var y = i * h / (num - 1);\n  drawLine(0, y, px, py);\n  drawLine(w, y, px, py);\n  var x = y * w / h;\n  drawLine(x, 0, px, py);\n  drawLine(x, h, px, py);\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n'
    }, {
        message: "当我还是小怪兽的时候，我也画这些.  你也喜欢吗?  改变线条的数量!",
        code: "var num = 10;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nfor (var i = 0; i < num; i = i + 1) {\n  var x = i * w / (num - 1);\n  var y = i * h / (num - 1);\n  drawLine(0, y, x, h);\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n",
        lessonSection: "More Fun with Lines",
    }, {
        message: "你可以在右上角画出另外的曲线吗? 你需要用另外一个drawLine() ，但是使用的参数是 x, 0, w, y.",
        code: "var num = 10;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nfor (var i = 0; i < num; i = i + 1) {\n  var x = i * w / (num - 1);\n  var y = i * h / (num - 1);\n  drawLine(0, y, x, h);\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n"
    }, {
        message: "漂亮!  试着用其他颜色和其他数量的线条来画出图形!",
        code: 'var num = 30;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nc.strokeStyle = "gold";\nfor (var i = 0; i < num; i = i + 1) {\n  var x = i * w / (num - 1);\n  var y = i * h / (num - 1);\n  drawLine(0, y, x, h);\n  drawLine(x, 0, w, y);\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n'
    }, {message: "你可以让两个图形有不同的颜色吗?",}, {
        message: "这是一个版本.  试着改变它们的颜色!",
        code: 'var num = 30;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nfor (var i = 0; i < num; i = i + 1) {\n  var x = i * w / (num - 1);\n  var y = i * h / (num - 1);\n  c.strokeStyle = "gold";\n  drawLine(0, y, x, h);\n  c.strokeStyle = "red";\n  drawLine(x, 0, w, y);\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n'
    }, {
        message: "这是一个令人着迷的函数，颜色随机改变.  它比较复杂难懂，但是请仔细看一看.  你能猜到它是怎么工作的吗? 先试着改变那些数字!",
        code: 'var num = 30;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nfor (var i = 0; i < num; i = i + 1) {\n  var x = i * w / (num - 1);\n  var y = i * h / (num - 1);\n  c.strokeStyle = randomRGBA();\n  drawLine(0, y, x, h);\n  c.strokeStyle = randomRGBA();\n  drawLine(x, 0, w, y);\n}\n\nfunction randomRGBA() {\n  var r = randInt(255);\n  var g = randInt(255);\n  var b = randInt(255);\n  var a = Math.random();\n  var rgba = [r,g,b,a].join(",");\n  return "rgba(" + rgba + ")";\n}\nfunction randInt(limit) {\n  var x = Math.random() * limit;\n  return Math.floor(x);\n}\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n'
    }, {
        message: "知道什么是编程了吗?  展示给我看!  你可以编写一个叫做fillSquare()的函数，你可以用它来画一个更大的正方形吗? 提示: 你需要一些代码，比如 <span class=tutor-code>function fillSquare(left, top, size) {</span>",
        code: "c.fillRect(20, 30, 100, 100);\n",
        lessonSection: "Quiz: Functions",
    }, {
        message: "你做到了吗?  像这样? 现在你可以使用 fillSquare() 来替代 fillRect()来画第一个正方形吗?",
        code: "c.fillRect(20, 30, 100, 100);\n\nfillSquare(200, 70, 150);\nfunction fillSquare(x, y, s) {\n  c.fillRect(x, y, s, s);\n}\n",
    }, {
        message: "看, 一条线. Huh. 想要更多的线条. 我们可以另外声明一个 drawLine() 函数 ，它可以帮助我们更容易地画出更多的线条.  你可以写出这个函数，并且用它画出这条线吗? 提示: 用 <span class=tutor-code>function doStuff(a, b, c, d) {</span>创建一个函数",
        code: "c.beginPath();\nc.moveTo(30, 20);\nc.lineTo(200, 50);\nc.stroke();\n"
    }, {
        message: "啊哈, 是不是更简单了?  在这条线下面画另外一条线.  现在是不是很简单?",
        code: "drawLine(30, 20, 200, 50);\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n"
    }, {message: "添加更多的线条是如此的简单，我想要更多的线条.  给我10条线, 一条在另一条的上面, 10条都是分开来的! 提示: 用for循环很容易实现. For循环是这样的 <span class=tutor-code>for (var i = 0; i < 3; i += 1) {</span>",}, {
        message: "你写的是不是像这样?  非常棒!  试着改变那些数字! 我希望 n 是 40 并且 dy 是 5!",
        code: "var n = 10;\nvar dy = 10;\nfor (var i = 0; i < n; i = i + 1) {\n  var y = 20 + i * dy;\n  drawLine(30, y, 200, y + 30);\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n",
    }, {
        message: "我的盒子弄丢了.  Hey, 看, 盒子, 被擦掉了!  试着移动白色的盒子，从 (50, 50) 到 (20, 20)!",
        code: 'function fillSquare(w, h, s) {\n  c.fillRect(w, h, s, s);\n}\n\nc.fillStyle = "blue";\nfillSquare(10, 10, 100);\nfillSquare(100, 100, 100);\nc.fillStyle = "white";\nfillSquare(50, 50, 100);\n',
        lessonSection: "Erasing",
    }, {
        message: "顺序很重要.  最后画上去的被留了下来!  现在试着移动白色的盒子!",
        code: 'function fillSquare(w, h, s) {\n  c.fillRect(w, h, s, s);\n}\n\nc.fillStyle = "blue";\nfillSquare(10, 10, 100);\nc.fillStyle = "white";\nfillSquare(50, 50, 100);\nc.fillStyle = "blue";\nfillSquare(100, 100, 100);\n'
    }, {
        message: "另外的清除方式是使用函数 clearRect().  你可以用它来画一个蓝色的笑脸吗?  它已经被画出来了.  你仅仅需要移动它们.",
        code: 'c.fillStyle = "blue";\nc.fillRect(50, 20, 200, 200);\n// Eyes\nc.clearRect(80, 150, 20, 20);\nc.clearRect(120, 150, 20, 20);\n// Mouth\nc.clearRect(70, 50, 100, 10);\n'
    }, {
        message: "我喜欢这个家伙.  Ooo, 我的朋友.",
        code: 'c.fillStyle = "blue";\nc.fillRect(50, 20, 200, 200);\n// Eyes\nc.clearRect(80, 50, 20, 20);\nc.clearRect(150, 50, 20, 20);\n// Mouth\nc.clearRect(70, 150, 100, 10);\n'
    }, {
        message: "一个大的 clearRect() 清除了所有的东西.  取消clearRect()的注释 (remove the <span class=tutor-code>//</span>)， 看看发生了什么.",
        code: 'var size = 80;\nvar offset = 20;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nc.fillStyle ="rgba(0, 0, 255, 0.5)";\nc.fillRect(offset, offset, size, size);\noffset = offset + 60;\nc.fillStyle ="rgba(0, 255, 0, 0.5)";\nc.fillRect(offset, offset, size, size);\n// c.clearRect(0, 0, w, h);\noffset = offset + 60;\nc.fillStyle ="rgba(255, 0, 0, 0.5)";\nc.fillRect(offset, offset, size, size);\n'
    }, {
        message: "<span class=tutor-code>//</span> 在一行代码的开头，使得这一行代码被忽略.  这叫做添加注释.  试着添加 <span class=tutor-code>//</span> 到其他行，看看发生了什么!",
        code: 'var size = 80;\nvar offset = 20;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nc.fillStyle ="rgba(0, 0, 255, 0.5)";\nc.fillRect(offset, offset, size, size);\noffset = offset + 60;\nc.fillStyle ="rgba(0, 255, 0, 0.5)";\nc.fillRect(offset, offset, size, size);\n// c.clearRect(0, 0, w, h);\noffset = offset + 60;\nc.fillStyle ="rgba(255, 0, 0, 0.5)";\nc.fillRect(offset, offset, size, size);\n',
        lessonSection: "Comments",
    }, {
        message: "一个盒子.  我们怎么让它远离边缘呢?  改变 x 和 y的值看看.",
        code: 'var x = 50;\nvar y = 50;\n\nc.fillStyle = "purple";\nc.translate(x, y);\nc.fillRect(0, 0, 100, 100);\n',
        lessonSection: "Rotation and Translation",
    }, {message: "The fillRect()函数告诉我们(left, top) 是 (0, 0), 所以你不认为这个盒子将在左上角吗? 但是, 等等,  translate()是什么?"},
    {message: "translate() 改变了 (0, 0) 这个位置. 例如在translate(50, 50)后,  任何从 (0, 0)开始的图形，将从(50, 50)开始.  从 (20, 20) 开始画，将会变成从 (70, 70)开始, 因为 50 + 20 = 70.  看到了吗?"}, {
        message: "下面的代码做了什么，为什么?  如果取消save() 和 restore() 的注释，将会发生什么? 试试看. 是不是你所预期的?",
        code: 'var x = 50;\nvar y = 50;\n\n// c.save();\nc.fillStyle = "purple";\nc.translate(x, y);\nc.fillRect(0, 0, 100, 100);\n// c.restore();\nc.translate(x, y);\nc.fillRect(0, 0, 100, 100);\n'
    }, {
        message: "第二个盒子变成了黑色，而且 和第一个盒子重叠了!  为什么?",
        code: 'var x = 50;\nvar y = 50;\n\nc.save();\nc.fillStyle = "purple";\nc.translate(x, y);\nc.fillRect(0, 0, 100, 100);\nc.restore();\nc.translate(x, y);\nc.fillRect(0, 0, 100, 100);\n'
    }, {message: "restore() 清除 save() 后的所有改变.  所以, 如果你执行了save操作, 然后改变了fillStyle的颜色或者做了translate()变换, 然后执行restore, 所有的参数变化都将回到save操作前."}, {
        message: "我们还可以旋转这些图形.  改变参数angle的值试试!",
        code: "var x = 50;\nvar y = 50;\nvar angle = 0.1;\n\nc.translate(x, y);\nc.rotate(angle);\nc.strokeRect(0, 0, 100, 100);\n"
    }, {
        message: "你可能会用到角度（degrees）?  角度（Angles）在Javascript中使用的是弧度（radians）.  45 度（degrees）换成弧度是0.8.  试着改变角度，从0.1 到 0.8!",
        code: "var x = 50;\nvar y = 50;\nvar angle = 0.1;\n\nc.translate(x, y);\nc.rotate(angle);\nc.strokeRect(0, 0, 100, 100);\n"
    }, {message: "旋转一圈是360度, 对吗?  用弧度（radians）的话是 6.28.",},
    {message: "你注意到了吗，当你选择这个盒子的时候，它是绕左上角旋转的?  和我们的 translate()的位置是同一个点, 对吗?"}, {
        message: "现在改变角度试试.  有什么不同?",
        code: "var x = 100;\nvar y = 100;\nvar angle = 0.1;\n\nc.translate(x, y);\nc.rotate(angle);\nc.strokeRect(-50, -50, 100, 100);\n"
    }, {message: "有点奇怪（Kind of weird） ， strokeRect() 的left 和 top 的值都是 -50, 不是吗?  但是盒子的左上角的点还是(50, 50), 但是我们转换到了 (100, 100), 而 100 - 50 = 50."},
    {message: "当我们选择图形的时候, 是绕着 (100, 100) 旋转的，因为函数translate().  Oh, 点 (100, 100) 是盒子的中心!  所以, 这个盒子是围绕这个中心旋转的!",}, {
        message: "新的translate() 和 rotate() 会覆盖前面的 translate() 和 rotate(), 直到 restore()执行后才回到最开始的状态.  试着改变角度 或者 取消 save() 和 restore()的注释!",
        code: 'var x = 100;\nvar y = 100;\nvar angle = 0.1;\n\n// c.save();\nc.fillStyle = "purple";\nc.translate(x, y);\nc.rotate(angle);\nc.fillRect(-50, -50, 100, 100);\n// c.restore();\nc.translate(x, y);\nc.rotate(angle);\nc.fillRect(-50, -50, 100, 100);\n'
    }, {message: "改变后是否符合你的预期呢?  你能知道它做了什么，为什么会这样吗?  通过save() 和 restore(), 第二个盒子变成黑色 并且 画在了左上角第一个紫色盒子的上面."}, {
        message: "你能把黑色盒子从紫色盒子上面移开吗?  让两个盒子都能看见?",
        code: 'var x = 100;\nvar y = 100;\nvar angle = 0.1;\n\nc.save();\nc.fillStyle = "purple";\nc.translate(x, y);\nc.rotate(angle);\nc.fillRect(-50, -50, 100, 100);\nc.restore();\nc.translate(x, y);\nc.rotate(angle);\nc.fillRect(-50, -50, 100, 100);\n'
    }, {
        message: "这是一种方法. 看看 translate()是怎么改变到一个不同的点去的?  改角度了!  你试过一个负数，比如 -0.2 吗?",
        code: 'var x = 100;\nvar y = 100;\nvar angle = 0.1;\n\nc.save();\nc.fillStyle = "purple";\nc.translate(x, y);\nc.rotate(angle);\nc.fillRect(-50, -50, 100, 100);\nc.restore();\nc.translate(x * 2, y * 2);\nc.rotate(angle*2);\nc.fillRect(-50, -50, 100, 100);\n'
    }, {
        message: "这是你想要的，盒子绕它们的中心旋转.  看, 一个让盒子旋转到不同角度的函数!  你能增加更多的盒子吗?",
        code: "function strokeSquare(x, y, size, angle) {\n  c.save();\n  c.translate(x + size / 2, y + size / 2);\n  c.rotate(angle);\n  c.strokeRect(-size / 2, -size / 2,\n                size, size);\n  c.restore();\n}\n\nstrokeSquare(50, 50, 100, 0.2);\nstrokeSquare(180, 100, 50, -0.1);\n",
    }, {
        message: "你的代码呢? 让我看看! 画一个角度是-0.5的盒子.  提示: 使用 c.rotate(); 和 c.strokeRect();",
        code: "",
        lessonSection: "Quiz: Rotation and Translation",
    }, {message: "Oh, 太简单了? 你希望有更难的? 画五个重叠的盒子, 每一个比下一个多0.3弧度.<br>提示: c.translate() 可能有用<br>提示: 一个像这样的for循环 <span class=tutor-code>for (var i = 0; i < 5; i += 1) {</span>",}, {
        message: "你的结果和这个一样吗? 看看它是怎么工作的?  首先用translate()移动到一个点, 然后重复画绕这个点正方形，并且绕这个点旋转.",
        code: "var angle = 0.2;\nvar num = 5;\nc.translate(150, 150);\nfor (var i = 0; i < num; i = i + 1) {\n  c.strokeRect(-75, -75, 150, 150);\n  c.rotate(angle);\n}\n"
    }, {message: "自己玩一玩!  改变数字和角度!",}, {
        message: "假设我们要画一棵树.  你会怎么做?",
        code: "",
        lessonSection: "A Hard Problem",
    }, {
        message: "树有树枝.  这是一个开始. 你可以添加更多的树枝吗?",
        code: "drawLine(200, 300, 200, 200);\ndrawLine(200, 200, 160, 130);\ndrawLine(200, 200, 240, 130);\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n",
    }, {message: "Oog, 工程浩大(that a lot of work).",}, {
        message: "我试着使用变量.  变简单了吗?  还不确定. 你是怎么认为的呢?",
        code: "var w = c.canvas.width;\nvar h = c.canvas.height;\n\ndrawLine(w * 0.5, h, w * 0.5, h * 0.7);\ndrawLine(w * 0.5, h * 0.7, w * 0.4, h * 0.5);\ndrawLine(w * 0.5, h * 0.7, w * 0.6, h * 0.5);\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n",
    }, {message: "Bleah, 太多的工作了. 用for循环呢?  它是怎么工作的? 我不知道.  我们从每一个数枝上，再画两个树枝呢? 我不确定.  你觉得可行吗?",},
    {message: "不, 我觉得用一个循环也不能简单的画出一棵树.  那么我们该怎么做呢?  用函数呢?",},
    {message: "也许一个函数可以画一个树枝.  但是怎么做到每一个树枝上面再画两个树枝呢?",}, {
        message: "让我们从用一个函数画一个树枝开始.  这是一个.  它使用了4个数字, 从 (x,y) 开始, 长度 <span class=tutor-code>l</span>, 还有 <span class=tutor-code>direction</span> 告诉我们从哪里开始画 左边线（left）, 右边（right）, 或者 （直线）straight.",
        code: "var w = c.canvas.width;\nvar h = c.canvas.height;\n\ndrawBranch(w / 2, h, 100, 0);\n\nfunction drawBranch(x, y, l, direction) {\n  var x2 = x + l * direction;\n  var y2 = y - l;\n  drawLine(x, y, x2, y2);\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n"
    }, {
        message: "<span class=tutor-code>direction</span>使分支向 left (负数) or right (正数)倾斜.  看?  试着改变它!",
        code: "var w = c.canvas.width;\nvar h = c.canvas.height;\n\ndrawBranch(w / 2, h, 100, -0.1);\n\nfunction drawBranch(x, y, l, direction) {\n  var x2 = x + l * direction;\n  var y2 = y - l;\n  drawLine(x, y, x2, y2);\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n"
    }, {message: "现在我们怎么使用它来画两个分支呢?"}, {
        message: "Ah, 我知道了, 让函数调用它自己! 你能知道它做了什么吗?",
        code: "var w = c.canvas.width;\nvar h = c.canvas.height;\n\ndrawBranch(w/2, h, 100, 0);\n\nfunction drawBranch(x, y, l, direction) {\n  var x2 = x + l * direction;\n  var y2 = y - l;\n  drawLine(x, y, x2, y2);\n  if (l > 20) {\n    // Call drawBranch twice more\n    drawBranch(x2, y2, l / 2, -0.8);\n    drawBranch(x2, y2, l / 2, 0.8);\n  }\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n",
        lessonSection: "Recursion",
    }, {
        message: "不可思议! 这是一个更容易使用的版本.  动手试试看!  改变 <span class=tutor-code>xScale</span>, <span class=tutor-code>yScale</span>, or <span class=tutor-code>minLength</span>!  很酷, 是不是?",
        code: "var minLength = 20;\nvar yScale = 0.5;\nvar xScale = 0.8;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\ndrawBranch(w/2, h, 100, 0);\n\nfunction drawBranch(x, y, l, direction) {\n  var x2 = x + l * direction;\n  var y2 = y - l;\n  drawLine(x, y, x2, y2);\n  if (l > minLength) {\n    // Call drawBranch twice more\n    drawBranch(x2, y2, l * yScale, -xScale);\n    drawBranch(x2, y2, l * yScale, xScale);\n  }\n}\n\nfunction drawLine(x1, y1, x2, y2) {\n  c.beginPath();\n  c.moveTo(x1, y1);\n  c.lineTo(x2, y2);\n  c.stroke();\n}\n"
    }, {message: "我们结合了新的东西.  怪兽没有说明什么."},
    {message: "drawBranch() 是一个 递归（<i>recursive</i>） 函数.  意思是它会调用自身."},
    {message: "drawBranch() 是在 <span class=tutor-code>l > minLength</span>的时候才调用它自己. drawBranch()调用它自己后， <span class=tutor-code>l</span> 变的越来越小, 所以 当分支的长度足够小的时候，drawBranch() 最终停止调用它自己."}, {
        message: "递归函数（Recursive functions）非常优雅, 但是难理解! 我们来深入理解它. 声明一个新的函数 <span class=tutor-code>nSquareRecursive(4);</span> 来替代函数 <span class=tutor-code>nSquare(4);</span>",
        code: 'nSquare(4);\n\nfunction nSquare(n) {\n  c.strokeStyle = "blue";\n  for (var i = n; i > 0; i = i - 1) {\n    c.strokeRect(i * 30, i * 30, 100, 100);\n  }\n}\nfunction nSquareRecursive(n) {\n  if (n > 1) {\n    nSquareRecursive(n - 1);\n  }\n  c.strokeRect(n * 30, n * 30, 100, 100);\n}\n',
    }, {message: "除了不是蓝色, 它们是一样的, 对吗?  你知道它们是怎么工作的吗?",},
    {message: "nSquare() 用了一个for循环, 从4开始递减: 4, 3, 2, 1.",},
    {message: "nSquareRecursive() 调用它自己，并且每次递减.  所以, 当我们输入参数 4去调用它, 它输入参数 3调用它自己, 并且再次输入参数2调用自己, 然后再一次用参数1调用.  一的时候, 它说, 停止调用自己, 所以它停止了.  并且, 每次调用, 它都在位置 (n * 30, n * 30)画了一个盒子.  看到了吗?",}, {
        message: "这个代码块画出了一些逐步缩小的盒子. 看看它是怎么工作的?",
        code: "branchBox(100);\n\nfunction branchBox(size) {\n  c.translate(size, size);\n  c.strokeRect(-size, -size, size, size);\n  if (size > 5) {\n    branchBox(size * 0.65);\n  }\n}\n"
    }, {message: "它的工作方式是，通过translate()变换到盒子的右下角, 然后紧接着画一个盒子. 所以盒子从坐标(-size, -size) 开始，尺寸是 <span class=tutor-code>size</span>.  然后, 在盒子变的足够小之前, 函数将持续调用它自己, 但是每一次的尺寸都是逐步缩小的.",}, {
        message: "这里用ofr循环代替它做了同样的事. 比较这两种方法. 它们都是怎么工作的?",
        code: 'branchBoxForLoop(100);\n\nfunction branchBoxForLoop(size) {\n  c.strokeStyle = "blue";\n  for (var i = size; i > 4; i = i * 0.65) {\n    c.translate(i, i);\n    c.strokeRect(-i, -i, i, i);\n  }\n}\nfunction branchBox(size) {\n  c.translate(size, size);\n  c.strokeRect(-size, -size, size, size);\n  if (size > 5) {\n    branchBox(size * 0.65);\n  }\n}\n'
    }, {message: "for循环从画一个尺寸是 100的盒子开始, 然后是 65的, 等等. 递归版本也是一样, 但是递归版本是通过调用它自己来做到这些.",},
    {message: "你可以尝试你的想法!  并且去实验!",}, {
        message: "我们回到数的话题.  Ooo!  一棵更漂亮的树!",
        code: "var angle = 0.35;\nvar branchScale = 0.75;\nvar l = 75;\nvar minL = 5;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nc.translate(w/2, h);\ndrawBranch(l, 0);\n\nfunction drawBranch(l, direction) {\n  c.save();\n  c.rotate(angle * direction);\n  c.fillRect(-l / 20, 0, l / 10, -l);\n  if (l > minL) {\n    c.translate(0, -l);\n    drawBranch(l * branchScale, -1);\n    drawBranch(l * branchScale, 1);\n  }\n  c.restore();\n}\n",
        lessonSection: "Rotation, Translation, and Recursion",
    }, {message: "看看它是怎么工作的? 它通过translate() 移动到分支的末端, 然后通过 rotate() 使分支向两边倾斜.",},
    {message: "试着改变 <span class=tutor-code>angle</span>, <span class=tutor-code>branchScale</span>, <span class=tutor-code>l</span>, and <span class=tutor-code>minL</span>的值!  如果你试验一下, 会得到一些真正有趣的图形.  赶快动手吧!",},
    {message: "我想如果 <span class=tutor-code>angle</span> 做一些小的随机改变，看起来会更像一棵树.  你可以让angle的值变大一点，然后使的参数rotate() 介于0和angle之间? (提示: <span class=tutor-code>Math.random()</span> 得到 0.0 to 1.0的一个随机数)"}, {
        message: "这是一个版本.  你可以让 <span class=tutor-code>branchScale</span> 也变成随机吗?",
        code: "var angle = 0.5;\nvar branchScale = 0.75;\nvar l = 75;\nvar minL = 5;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nc.translate(w/2, h);\ndrawBranch(l, 0);\n\nfunction drawBranch(l, direction) {\n  c.save();\n  // Make a number between 0 and angle\n  var a = angle * Math.random();\n  c.rotate(a * direction);\n  c.fillRect(-l / 20, 0, l / 10, -l);\n  if (l > minL) {\n    c.translate(0, -l);\n    drawBranch(l * branchScale, -1);\n    drawBranch(l * branchScale, 1);\n  }\n  c.restore();\n}\n"
    }, {
        message: "Ooo!  这几乎跟一棵树一样了!",
        code: "var angle = 0.5;\nvar branchScale = 0.75;\nvar l = 60;\nvar minL = 5;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\nc.translate(w/2, h);\ndrawBranch(l, 0);\n\nfunction drawBranch(l, direction) {\n  c.save();\n  var a = angle * Math.random();\n  c.rotate(a * direction);\n  c.fillRect(-l / 20, 0, l / 10, -l);\n  if (l > minL) {\n    c.translate(0, -l);\n    // Make a number between -0.1 and 0.1\n    var b = 0.2 * (Math.random() - 0.5);\n    // Now make it between 0.9 and 1.1\n    b = b + 1;\n    // And use it to change branchScale\n    drawBranch(l * b * branchScale, -1);\n    b = 1 + 0.2 * (Math.random() - 0.5);\n    drawBranch(l * b * branchScale, 1);\n  }\n  c.restore();\n}\n",
    }, {message: "试着改变 <span class=tutor-code>angle</span>, <span class=tutor-code>branchScale</span>, <span class=tutor-code>l</span>, and <span class=tutor-code>minL</span>的值!  如果你试验一下, 你能得到一些很疯狂的东西!",}, {
        message: "我打赌你可以画一棵自己的树了!  想试一下吗?  我会帮助你的!",
        code: "",
        lessonSection: "Drawing Your Own Tree",
    }, {message: "让我们来画一棵和之前不一样的树.  我们让树枝左右交替生长.  一些植物是那样的.  准备好开始了吗?  我将指导你完成它!",}, {
        message: "So, 首先我们需要一个树枝.  我们声明一个函数 drawBranch()， 它有两个值, 长度叫<span class=tutor-code>l</span> ，另一个叫 <span class=tutor-code>direction</span>.",
        code: "",
    }, {message: "还记得这么声明一个函数吗?  你先不用做其他事, 仅仅声明一个函数，叫drawBranch().",}, {
        message: "你想的是这样吗?",
        code: "function drawBranch(l, direction) {\n  \n}\n"
    }, {
        message: "我添加了下一步的注释.  我们要开始画一棵我们的树.  你在每一个注释下面敲下你的代码了吗?",
        code: "function drawBranch(l, direction) {\n  \n}\n\n// Use c.translate() to move to (200, 250).\n\n// Call drawBranch() with 50 as the length\n// and 1 as the direction\n",
    }, {
        message: "Okay, 所以你写了 translate()， 所以你试着从右下角画一个分支.  现在我们需要 drawBranch() 做一些事情! 你能做到注释说的吗?  你可以画出一个单独的分支 (看起来像树干).",
        code: "function drawBranch(l, direction) {\n  // c.fillRect(left, top, width, height);\n  // will draw a rectangle.\n  // Use it do draw a rectangle that\n  // starts at (-1, 0) and is 2 wide\n  // and -l (that's l as in length) tall.\n  \n}\n\nc.translate(200, 250);\ndrawBranch(50, 1);\n",
    }, {
        message: "你应该画出了一个像这样的东西.  让我们继续!  看看注释告诉我们下一步怎么做!",
        code: "function drawBranch(l, direction) {\n  c.fillRect(-1, 0, 2, -l);\n  \n  // Use c.translate() to move to the end\n  // of the branch.\n  // Hint: The end is at (0, -l), that's l\n  // as in length.\n  \n}\n\nc.translate(200, 250);\ndrawBranch(50, 1);\n",
    }, {
        message: "棒极了!  现在你已经画了第一个分支, 移动到这个分支的末端, 你已经准备好画更多的分支了!",
        code: "function drawBranch(l, direction) {\n  c.fillRect(-1, 0, 2, -l);\n  \n  c.translate(0, -l);\n  \n}\n\nc.translate(200, 250);\ndrawBranch(50, 1);\n",
    }, {message: "让我们停下来想想，下一步我们改做什么.",},
    {message: "它将分开成两个分支, 一个往上, 另一个往旁边.  我们希望分支向左右交替生长.",},
    {message: "我们要让分支保持分开、生长、分开、生长，直到变得很短.",}, {
        message: "我们开始下一步.  只要 <span class=tutor-code>l</span> 大于 5，我们要一直画很多的分支出来.  你能添加这部分代码吗?",
        code: "function drawBranch(l, direction) {\n  c.fillRect(-1, 0, 2, -l);\n  \n  c.translate(0, -l);\n  \n  // Replace true below with something that\n  // checks if l is big enough\n  if ( true ) {\n    // Don't do anything here yet.\n    // We'll add more branches later.\n  }\n  \n}\n\nc.translate(200, 250);\ndrawBranch(50, 1);\n",
    }, {
        message: "你的代码应该像这样.",
        code: "function drawBranch(l, direction) {\n  c.fillRect(-1, 0, 2, -l);\n  \n  c.translate(0, -l);\n  \n  if ( l > 5 ) {\n    // Don't do anything here yet.\n    // We'll add more branches later.\n  }\n  \n}\n\nc.translate(200, 250);\ndrawBranch(50, 1);\n",
    }, {
        message: "让我们直接添加分支.  我们画的时候，让每一个分支都比上一个短一点.  按照注释的说明做.",
        code: "function drawBranch(l, direction) {\n  c.fillRect(-1, 0, 2, -l);\n  \n  c.translate(0, -l);\n  \n  if ( l > 5 ) {\n    // Call drawBranch() with l * 0.8 and direction\n    \n  }\n  \n}\n\nc.translate(200, 250);\ndrawBranch(50, 1);\n",
    }, {
        message: "你的是这样吗?  看看它做了什么?  它重复的画了一些向上的分支, 每次分支都变短一点.  它看起来像一条线, 但它们确实是由几个分支堆积起来的.",
        code: "function drawBranch(l, direction) {\n  c.fillRect(-1, 0, 2, -l);\n  \n  c.translate(0, -l);\n  \n  if ( l > 5 ) {\n    drawBranch(l * 0.8, direction);\n  }\n  \n}\n\nc.translate(200, 250);\ndrawBranch(50, 1);\n",
    }, {message: "到目前为止，是不是很无聊?",}, {message: "它将变得激动人心!",}, {
        message: "我们添加第二个分支!  这个分支, 将根据direction的方向向一边旋转, 然后画一个较短的分支.  跟着注释的说明做.",
        code: "function drawBranch(l, direction) {\n  c.fillRect(-1, 0, 2, -l);\n  \n  c.translate(0, -l);\n  \n  if ( l > 5 ) {\n    drawBranch(l * 0.8, direction);\n    \n    // Use c.rotate() with an angle of\n    // 0.5 * direction\n    \n    \n    // Call drawBranch with l * 0.7 and direction\n    \n  }\n  \n}\n\nc.translate(200, 250);\ndrawBranch(50, 1);\n",
    }, {message: "Aieeee!  你这样什么鬼?",}, {message: "只是个玩笑!  它很好!",},
    {message: "这是调试（debugger）的一部分, 找出问题（bug）.",},
    {message: "So, 它没有达到你的期望，是吗?",},
    {message: "知道怎么错了吗?",},
    {message: "这是因为 translate() 和 rotate() 告诉分支从上一个的头部开始堆积.  我们不是真的想这样做.  当画第二个分支的时候, 我们真正想要的是，第一个分支就是转换（translated）和旋转（rotated）的地方，但是它不是.",}, {
        message: "用Save 和 restore 来解救（rescue）!  你可以在注释的地方添加 <span class=tutor-code>c.save();</span> and <span class=tutor-code>c.restore();</span> 吗?",
        code: "function drawBranch(l, direction) {\n  // Save here!\n  \n  \n  c.fillRect(-1, 0, 2, -l);\n  \n  c.translate(0, -l);\n  \n  if ( l > 5 ) {\n    drawBranch(l * 0.8, direction);\n    \n    c.rotate(0.5 * direction);\n    drawBranch(l * 0.7, direction);\n  }\n  \n  // Restore here!\n  \n}\n\nc.translate(200, 250);\ndrawBranch(50, 1);\n",
    }, {
        message: "这次好多了.  但是仅仅画了树的一边!  为什么会这样?",
        code: "function drawBranch(l, direction) {\n  c.save();\n  \n  c.fillRect(-1, 0, 2, -l);\n  \n  c.translate(0, -l);\n  \n  if ( l > 5 ) {\n    drawBranch(l * 0.8, direction);\n    \n    c.rotate(0.5 * direction);\n    drawBranch(l * 0.7, direction);\n  }\n  \n  c.restore();\n}\n\nc.translate(200, 250);\ndrawBranch(50, 1);\n",
    }, {message: "有答案了吗?",}, {message: "那是因为我们没有改变direction.  Direction 从开始就是同一个值, 一直是 1.  它因该是 1, -1, 1, -1 ...这样交替"},
    {message: "你可以在drawBranch()里面的两个drawBranch()都用 -direction 替代 direction吗?",}, {
        message: "你的和下面一样了吗?  Wow, 干得好!",
        code: "function drawBranch(l, direction) {\n  c.save();\n  \n  c.fillRect(-1, 0, 2, -l);\n  \n  c.translate(0, -l);\n  \n  if ( l > 5 ) {\n    drawBranch(l * 0.8, -direction);\n    \n    c.rotate(0.5 * direction);\n    drawBranch(l * 0.7, -direction);\n  }\n  \n  c.restore();\n}\n\nc.translate(200, 250);\ndrawBranch(50, 1);\n",
    }, {
        message: "自己做更多的调整! 比如修改 0.8, 0.7, 和 0.5 去看看会发生什么!",
        lessonSection: "Play with Your Tree",
    }, {
        message: "看! 树枝头有绿叶了!",
        code: 'function drawBranch(l, direction) {\n  c.save();\n  c.fillRect(-1, 0, 2, -l);\n  c.translate(0, -l);\n  if (l > 5) {\n    drawBranch(l * 0.8, -direction);\n    c.rotate(0.5 * direction);\n    drawBranch(l * 0.7, -direction);\n  } else {\n    c.fillStyle = "green";\n    c.fillRect(-2, -2, 4, 4);\n  }\n  c.restore();\n}\n\nc.translate(200, 250);\ndrawBranch(50, 1);\n',
    }, {message: "看它是怎么工作的? 那个尺寸是4的小绿色方块就是绿叶! 它们仅仅在树枝的末尾才会被加上.",}, {message: "你可以让树枝编成棕色(brown)吗?",}, {
        message: "让你们看看一些真正酷的东西，它仅仅做了一些小的调整!",
        code: 'function drawBranch(l) {\n  // Make longer branches wider\n  var w = 0.5 + l / 30;\n  c.fillRect(w / 2, 0, w, -l);\n  c.save();\n  c.translate(0, -l);\n  if (l > 1) {\n    // Start at -80 degrees\n    var a = -Math.PI * 4 / 9;\n    // Draw three branches\n    for (var i = 0; i < 3; i = i + 1) {\n      // The length of our new branches\n      var l2 = l * 0.5;\n      // Make the middle branch bigger\n      if (i == 1) { l2 = l2 + 0.3 * l; }\n      \n      c.save();\n      c.rotate(a);\n      drawBranch(l2);\n      c.restore();\n      \n      // Add 90 degrees for the next branch\n      a = a + Math.PI / 2;\n    }\n  }\n  c.restore();\n}\n\nc.fillStyle = "green";\nc.translate(170, 270);\ndrawBranch(60);\n',
        lessonSection: "Fun with Ferns",
    }, {message: "这棵厥类植物的每个分支上都有三个分支, 每一个分支的偏移角度分别是 -80, 10, 还有 100 度.  看看它是怎么工作的?",},
    {message: "每次画一个分支, 最后一个分支的时候，会画出三个分支.  一直重复这个动作, 越来越短, 最后看起来就像一棵蕨类了!",}, {
        message: "所有树和蕨类植物之类的东西，是一种叫做分形<i>fractal</i>的模式. 分形学（Fractals） 在数学中非常有趣、非常酷、非常令人着迷.",
        lessonSection: "Fractals",
    }, {
        message: "这个分形叫做Terdragon.",
        code: "var n = 8;\nvar l = 5;\nvar angle = 120 * Math.PI / 180;\n\nc.translate(300, 200);\nterdragon(n);\nfunction terdragon(n) {\n  if (n <= 1) {\n    drawLine(l);\n  } else {\n    terdragon(n-1);\n    c.rotate(angle);\n    terdragon(n-1);\n    c.rotate(-angle);\n    terdragon(n-1);\n  }\n}\nfunction drawLine(l) {\n  c.beginPath();\n  c.moveTo(0, 0);\n  c.lineTo(l, 0);\n  c.stroke();\n  // Finish at the end of the line we drew\n  c.translate(l, 0);\n}\n"
    }, {message: "如果你让l变大, 你会发现三角形变大了!",},
    {message: "你能理解它是怎么实现的吗? 看一下代码.",},
    {message: "让 <span class=tutor-code>l=10</span> ， 然后让<span class=tutor-code>n=1</span> ， <span class=tutor-code>n=2</span> ， <span class=tutor-code>n=3</span>, 你就知道它是怎么被种植出来的.",}, {
        message: "Okay, 现在是最后一个测试的时候了.  有点难, 不能完成也没事.  接下来还会有很多有趣的东西.  W无论你做什么,不要放弃,一定要继续,这样你就可以看到所有的有趣的东西!",
        code: "",
        lessonSection: "Quiz: Challenge Problem",
    }, {
        message: "这个测试, 我希望完全由你们自己动手实现.  制作一个棋盘状图案（西方象棋）, 先是一个黑色的正方形, 然后是一个白色, 再一个黑色, 等等, 至少要有4行 (像一个 6 x 4 的网格).  你能做到吗?",
        code: ""
    }, {message: "这非常难，如果你做到了，干的好，我非常感动!  如果你还没实现也不用担心, 这里有一个提示, 你可能需要2个循环, 两个循环水嵌套的, 你只是需要使用一个 c.fillRect(), 还有别忘了循环了 <span class=tutor-code>for (var i = 0; i < 3; i += 1) {</span>",},
    {message: "准备好用不同的方法来实现它了吗?",}, {
        message: "这是一种方式.  看看它是怎么工作的?",
        code: "var size = 50;\n\nfor (var i = 0; i < 300; i = i + 100) {\n  for (var j = 0; j < 200; j = j + 100) {\n    fillSquare(i, j, size);\n  }\n}\nfor (var i = 50; i < 300; i = i + 100) {\n  for (var j = 50; j < 200; j = j + 100) {\n    fillSquare(i, j, size);\n  }\n}\n\nfunction fillSquare(x, y, s) {\n  c.fillRect(x, y, size, size);\n}\n",
        lessonSection: "Many Ways to Code",
    }, {message: "如果不明白, 用<span class=tutor-code>//</span>注释掉其中一个 fillSquare()，你就可以看看其他函数在做什么.",},
    {message: "它先是画第一和第三行, 从(0, 0)开始, 然后 (0, 100), (100, 0),  (100, 100), 等等.  然后画第二和第四行, 从 (50, 50)开始, 然后 (50, 150), 等等. 能理解吗?",}, {
        message: "让我们看看另一种实现棋盘的方式.  这是一个版本. 看看它是怎么工作的?",
        code: "var size = 50;\n\nfor (var i = 0; i < 3; i = i + 1) {\n  for (var j = 0; j < 2; j = j + 1) {\n    var x = i * 2 * size;\n    var y = j * 2 * size;\n    fillSquare(x, y, size);\n    x = x + size;\n    y = y + size;\n    fillSquare(x, y, size);\n  }\n}\n\nfunction fillSquare(x, y, s) {\n  c.fillRect(x, y, size, size);\n}\n"
    }, {message: "每一次的循环, 它都会画两个正方形, 有一个在另一个的右下角.",},
    {message: "然后, 横向执行3次纵向执行2次, 略过了白色正方形.  酷, 是不是?",}, {
        message: "这又是实现棋盘的另一种方式.  有想象这是怎么实现的吗?   <span class=tutor-code>i % 2</span> 做了什么?",
        code: "var size = 50;\n\nfor (var i = 0; i < 6; i = i + 1) {\n  for (var j = 0; j < 4; j = j + 1) {\n    if ((i % 2 + j % 2) % 2) {\n      var x = i * size;\n      var y = j * size;\n      fillSquare(x, y, size);\n\n    }\n  }\n}\n\nfunction fillSquare(x, y, s) {\n  c.fillRect(x, y, size, size);\n}\n",
        lessonSection: "Modulo",
    }, {message: "<span class=tutor-code>%</span> 意思是取模（modulo）, 得到的值是相除后的余数.",},
    {message: "所以, <span class=tutor-code>1 % 2</span> 结果是 1, <span class=tutor-code>2 % 2</span> 结果是 0 (因为 2 除以 2 什么都没留下), <span class=tutor-code>3 % 2</span> 结果也是 1, <span class=tutor-code>4 % 2</span> 结果是 0.",},
    {message: "所以, 这个复杂的表达式 -- <span class=tutor-code>(i % 2 + j % 2) % 2</span> -- 是怎么执行的呢? 当i是偶数的时候, <span class=tutor-code>i % 2</span> 结果是0.   j也是一样.  如果两个都是奇数, 结果是 (1 + 1) % 2, 还是 0. 所以, 如果i和j同时是偶数或者同时是奇数的时候，表达式的结果是0.",},
    {message: "对于条件语句, 0 就是 false 其他数字是 true. 所以, 只有当i或者j其中一个是奇数的时候，if语句里面才会执行.",},
    {message: "所有, 它所做的就是访问6 x 4网格中的所有方块, 但是，它仅仅在行或者列其中之一的值是奇数的时候画出一个黑色的方块. 现在能理解了吗?",},
    {message: "看看有多少种方法可以解决这样的问题?  你做一件事的时候，通常不止一种解决方案, 很多的策略可能会奏效.  是不是很灵活呢?",}, {
        message: "Okay, 是时候做些有趣的事了! 让我们来做动画吧!",
        code: "",
        lessonSection: "Animation",
    }, {
        message: "移动一个东西会很有趣，也有点不可思议.  你必须让一件事每1/20秒发生一次.这样做的目的是什么呢?",
        code: "var vx = 4;\nvar vy = 1;\nvar step = 50;  // In milliseconds\n\nvar x = 0;\nvar y = 0;\nvar size = 50;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar cmTID;\n\ndrawStep();\nfunction drawStep() {\n  // Clear the screen\n  c.clearRect(0, 0, w, h);\n  // Draw the box\n  c.strokeRect(x, y, size, size);\n  // Move the box unless at edge\n  if (x + vx + size < w &&\n      y + vy + size < h) {\n    x += vx;\n    y += vy;\n    clearTimeout(cmTID);\n    // Do it again in a little bit\n    cmTID = setTimeout(drawStep, step);\n  }\n}\n",
        hiddenCode: "var c = document.getElementById('pane').getContext('2d');\ndocument.stopAnimation = function() {clearTimeout(cmTID);};\nfunction rgba(r,g,b,a) {return 'rgba('+[r,g,b,a].join(',')+')';}\nfunction rgb(r,g,b,a) {return 'rgb('+[r,g,b].join(',')+')';}\n\n"
    }, {message: "下面代码的执行方式是这样的, 每一次我们告诉 drawStep(), 清空屏幕, 移动盒子, 画盒子, 等等, 直到到达边缘, 每一次执行drawStep()都会让它稍做停顿.",},
    {message: "试着修改 <span class=tutor-code>vx</span>, <span class=tutor-code>vy</span>, 还有 <span class=tutor-code>step</span>. 你可以改变盒子的移动速度和方向!"},
    {message: "注释掉clearRect()看看.  这是很酷的, 不是吗?"}, {
        message: "旋转盒子也是很有趣的.  你可以让它更快一点吗?",
        code: "var step = 100;\nvar angle = 0.01;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar cmTID;\n\nc.translate(w / 2, h / 2);\ndrawStep();\nfunction drawStep() {\n  c.clearRect(-w / 2, -h / 2, w, h);\n  c.strokeRect(-50, -50, 100, 100);\n  c.rotate(angle);\n  clearTimeout(cmTID);\n  cmTID = setTimeout(drawStep, step);\n}\n",
        lessonSection: "Rotating Movement",
    }, {message: "这和移动盒子是一样的.  每一次执行 drawStep(), 它会清除屏幕, 旋转, 画一个盒子, 然后稍做停顿后再一次执行drawStep() .",},
    {message: "注释掉clearRect()会怎么样呢?",}, {
        message: "添加更多的盒子. 它的执行结果是你预期的吗?",
        code: "var step = 100;\nvar angle = 0.01;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar cmTID;\n\nc.translate(w / 2, h / 2);\ndrawStep();\nfunction drawStep() {\n  c.clearRect(-w / 2, -h / 2, w, h);\n  c.strokeRect(-50, -50, 100, 100);\n  c.rotate(angle);\n  clearTimeout(cmTID);\n  cmTID = setTimeout(drawStep, step);\n}\n",
    }, {
        message: "我喜欢这个版本.  它像一个太阳系（solar system）!  改变它的速度!",
        code: "var step = 100;\nvar angle = 0.01;\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar cmTID;\n\nc.translate(w / 2, h / 2);\ndrawStep();\nfunction drawStep() {\n  c.clearRect(-w / 2, -h / 2, w, h);\n  c.strokeRect(-20, -20, 40, 40);\n  c.fillRect(10, 100, 5, 5);\n  c.fillRect(-50, -70, 5, 5);\n  c.fillRect(50, 30, 5, 5);\n  c.rotate(angle);\n  clearTimeout(cmTID);\n  cmTID = setTimeout(drawStep, step);\n}\n",
    }, {
        message: "暂停一秒钟.  坐下来，然后思考如何创建三个移动的盒子.",
        code: "",
        hiddenCode: "var c = document.getElementById('pane').getContext('2d');\nfunction rgba(r,g,b,a) {return 'rgba('+[r,g,b,a].join(',')+')';}\nfunction rgb(r,g,b,a) {return 'rgb('+[r,g,b].join(',')+')';}\n\n",
        lessonSection: "Objects",
    }, {message: "好, 你每次都需要x和y的位置, 是吗?  还有每一次size的值.  可能每一次你都还要知道 dx 的 dy 速度?  还有角度?",},
    {message: "可以声明一下变了 x1, x2, x3, y1, y2, y3, dx1 ... 呃.  这就有点痛苦了, 是不是?",}, {
        message: "这是实现它的另外一种方式, 我们可以创建一个对象!  对象是由变量和一些代码组成的一个容器（bundle）. 这是一个盒子对象.  看一下.  它是怎么工作的?",
        code: "// Box object\nfunction Box(x, y, size) {\n  this.x = x;\n  this.y = y;\n  this.size = size;\n  this.angle = 0;\n  this.dx = 0;\n  this.dy = 0;\n}\n// Create a new box\nvar b = new Box(10, 10, 100);\nc.strokeRect(b.x, b.y, b.size, b.size);\n"
    }, {message: " <span class=tutor-code>new Box(10, 10, 100)</span> 是怎么创建一个对象的呢, 然后立即调用Box()函数来设置它.  Box() 然后使用<span class=tutor-code>this.x</span> 去设置一个变量x，并将它传递到函数中."},
    {message: "用同样的方式为新的Box对象设置其他参数.  一旦这个对象创建并且设置完成, 我们将变量的值设置成<span class=tutor-code>b</span>.  接下来, 我们通过 <span class=tutor-code>b.x</span>, <span class=tutor-code>b.y</span>, 的方式来获取x,y，size的值."},
    {message: "我们的box对象，就是一些描述box的变量的一个容器（bundle）.  它表示盒子的位置，它的速度(dx和dy)，它有多大，所有盒子的属性.",}, {
        message: "我们甚至可以让box对象知道如何绘制自己.",
        code: "function Box(x, y, size) {\n  this.x = x;\n  this.y = y;\n  this.size = size;\n  this.angle = 0;\n  this.dx = 0;\n  this.dy = 0;\n\n  this.stroke = function() {\n    c.strokeRect(this.x, this.y,\n                 this.size, this.size);\n  };\n}\nvar b1 = new Box(30, 30, 120);\nb1.stroke();\n"
    }, {message: "看看怎么让<span class=tutor-code>this.stroke</span> 等于一个函数?  并且这个函数调用 strokeRect() 去绘制这个box?  接下来, 我们创建一个box，叫 b1 ，让它自己通过 <span class=tutor-code>b1.stroke()</span>绘制它自己. 非常酷, 不是吗?",}, {
        message: "你知道, 怪兽有一个秘密.  怪物躲在你的身上.",
        lessonSection: "Canvas Object",
    }, {message: "是不是对为什么用c.strokeRect() 去绘制一个盒子觉得疑惑?  <span class=tutor-code>c.</span>这是怎么处理的呢?  为什么?",},
    {message: "在这段时间里，你一直在使用一个对象来绘制，一个名为canvas对象的对象.",}, {
        message: "怪兽为你添加了一些从网页中获取对象的代码 ，并且放到了变量 <span class=tutor-code>c</span>里, 所以你可以使用它.  让我们看看这些被隐藏的代码是什么样的.",
        code: "// This code was hidden before\nvar pane = document.getElementById('pane');\nvar c = pane.getContext('2d');\n\nfunction Box(x, y, size) {\n  this.x = x;\n  this.y = y;\n  this.size = size;\n  this.angle = 0;\n  this.dx = 0;\n  this.dy = 0;\n\n  this.stroke = function() {\n    c.strokeRect(this.x, this.y,\n                 this.size, this.size);\n  };\n}\nvar b1 = new Box(30, 30, 120);\nb1.stroke();\n",
    }, {message: "代码要求文档对象（document object） (web浏览器对象)给我们一个在浏览器中叫做'pane'的节点 (就是我们要绘制的画布的id), 然后得到2d绘图元素.  我们命名画布对象为 <span class=tutor-code>c</span>， 并使用它的所有绘图功能, 这就是我们的 <span class=tutor-code>c.</span>一直在strokeRect()前面的原因."}, {
        message: "如果以后你在浏览器中写自己的代码来绘制，上面的知识会很有用!  但是, 现在呢, 我们先再次隐藏它, 我们把注意力放在.",
        code: "function Box(x, y, size) {\n  this.x = x;\n  this.y = y;\n  this.size = size;\n  this.angle = 0;\n  this.dx = 0;\n  this.dy = 0;\n\n  this.stroke = function() {\n    c.strokeRect(this.x, this.y,\n                 this.size, this.size);\n  };\n}\nvar b1 = new Box(30, 30, 120);\nb1.stroke();\n",
        lessonSection: "Using Objects",
    }, {message: "你能不能再创造几个盒子让它们自己画出来? 每一个你都必须用到stroke(), 像我就是创建box并且命名为b1.",},
    {message: "非常好, 无论多么痛苦，我吧这些box分别命名为 b1, b2, b3. 那么是个呢?  一百个呢?",}, {
        message: "我需要一个boxes集合, 像这样!",
        code: "function Box(x, y, size) {\n  this.x = x;\n  this.y = y;\n  this.size = size;\n  this.angle = 0;\n  this.dx = 0;\n  this.dy = 0;\n\n  this.stroke = function() {\n    c.strokeRect(this.x, this.y,\n                 this.size, this.size);\n  };\n}\n// Create an empty list of boxes\nvar boxes = [];\n// Create new boxes and add them to our list\nfor (var i = 0; i < 3; i = i + 1) {\n  boxes.push(new Box(i * 30, i * 20, 100));\n}\n// Tell all the boxes to draw themselves\nfor (var i = 0; i < boxes.length; i = i + 1) {\n  boxes[i].stroke();\n}\n",
        lessonSection: "Lists (Arrays)",
    }, {message: "怪物解释说，这是个新鲜事.",},
    {message: "<span class=tutor-code>[]</span> 创建了一个数组 <i>array</i>, 这是一个包含东西的基本列表.  这个列表可以存储 对象（objects）, 数字（numbers）, 还有其他你想存放的.",},
    {message: "So, <span class=tutor-code>var boxes = []</span> 的意思是创建一个叫做boxes的空的列表/数组.",},
    {message: "<span class=tutor-code>boxes.push()</span> 的作用是添加元素到列表（list）的尾部.  在这里, 我们用它来添加一个新的box.  因为我们使用了一个for循环，这个循环从 0, 1, 2 直到停止, 我们将从列表（list）的尾巴添加3个box.",},
    {message: "看一下第二个for循环.  <span class=tutor-code>boxes.length</span> 得到的是列表的长度.  <span class=tutor-code>boxes[0]</span> 是列表中的第一个box, <span class=tutor-code>boxes[1]</span> 是第二个, 等等.  因此, 第二个for循环遍历每一个box，并调用 <span class=tutor-code>boxes[i].stroke();</span>来绘制它自己",}, {message: "你可以添加更多的boxes吗?",}, {
        message: "迄今为止, 我们还没有做更多需要boxes对象的事.  让我们更进一步.  让boxes移动起来，并且制作动画!",
        lessonSection: "Methods on Objects",
    }, {
        message: "让我们先把所有的方块画到它们应该在的任何角度.  看看这个新版本的stroke()是如何工作的?",
        code: "function Box(x, y, size, a) {\n  this.x = x;\n  this.y = y;\n  this.size = size;\n  this.angle = a;\n  this.dx = 0;\n  this.dy = 0;\n\n  this.stroke = function() {\n    c.save();\n    // Find the center of the box\n    var x = this.x + this.size / 2;\n    var y = this.y + this.size / 2;\n    // Move to the center of the box\n    c.translate(x, y);\n    // Rotate the box around the center\n    c.rotate(this.angle);\n    // Draw the box around its center\n    c.strokeRect(-this.size / 2, -this.size / 2,\n                 this.size, this.size);\n    c.restore();\n  };\n}\n\nvar boxes = [];\nfor (var i = 1; i < 6; i = i + 1) {\n  var a = Math.random() * 2 - 1;\n  boxes.push(new Box(i * 50, i * 30, 100, a));\n}\nfor (var i = 0; i < boxes.length; i = i + 1) {\n  boxes[i].stroke();\n}\n"
    }, {message: "当一个盒子被要求画出自己的时候，我们通过移动到盒子的中心，旋转这个中心来匹配盒子的角度，然后在它的中心周围画一个盒子.  有点像我们之前做的旋转的盒子，对吧?",}, {
        message: "现在让我们把盒子旋转起来！查看新函数updateAll()。看看它在做什么?",
        code: "var rotateSpeed = 0.02;\nvar timeStep = 50; // In milliseconds\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar cmTID;\n\nfunction updateAll() {\n  c.clearRect(0, 0, w, h);\n  for (var i = 0; i < boxes.length; i = i + 1) {\n    boxes[i].angle += rotateSpeed;\n    boxes[i].stroke();\n  }\n  clearTimeout(cmTID);\n  cmTID = setTimeout(updateAll, timeStep);\n}\n\n// Create the boxes\nvar boxes = [];\nfor (var i = 1; i < 6; i = i + 1) {\n  var a = Math.random() * 2 - 1;\n  boxes.push(new Box(i * 50, i * 30, 100, a));\n}\n// Do the first update\nupdateAll();\n\nfunction Box(x, y, size, a) {\n  this.x = x;\n  this.y = y;\n  this.size = size;\n  this.angle = a;\n  this.dx = 0;\n  this.dy = 0;\n\n  this.stroke = function() {\n    c.save();\n    // Find the center of the box\n    var x = this.x + this.size / 2;\n    var y = this.y + this.size / 2;\n    // Move to the center of the box\n    c.translate(x, y);\n    // Rotate the box around the center\n    c.rotate(this.angle);\n    // Draw the box around its center\n    c.strokeRect(-this.size / 2, -this.size / 2,\n                 this.size, this.size);\n    c.restore();\n  };\n}\n",
        hiddenCode: "var c = document.getElementById('pane').getContext('2d');\ndocument.stopAnimation = function() {clearTimeout(cmTID);};\nfunction rgba(r,g,b,a) {return 'rgba('+[r,g,b,a].join(',')+')';}\nfunction rgb(r,g,b,a) {return 'rgb('+[r,g,b].join(',')+')';}\n\n"
    }, {message: "updateAll() 首先清除屏幕，然后再旋转每个盒子，然后再绘图. 最后，它说，在1/20秒内再叫我.  因此，每秒20次，我们旋转每个盒子并重新绘制它.  酷,不是吗?",},
    {message: "你能让盒子旋转得更快吗?",},
    {message: "你能让它们旋转另一个方向(逆时针方向，而不是顺时针)吗?",},
    {message: "你能增加更多的boxes吗?  你需要改变三件事来把它们都放在画布上，我打赌你能弄明白.  我喜欢其中的60个，看起来真的很怪异！",}, {
        message: "所有这些快速旋转的盒子都让人头晕目眩.  让我们再慢一点，我给你们看一些别的东西.  我们可以将更新（update）移动到每个box对象中.  当我们进行更新时，这将是非常方便的。看看这是怎么做的?",
        code: "var rotateSpeed = 0.01;\nvar timeStep = 50; // In milliseconds\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar cmTID;\n\nfunction updateAll() {\n  c.clearRect(0, 0, w, h);\n  for (var i = 0; i < boxes.length; i = i + 1) {\n    boxes[i].update();\n  }\n  clearTimeout(cmTID);\n  cmTID = setTimeout(updateAll, timeStep);\n}\n\n// Create the boxes\nvar boxes = [];\nfor (var i = 1; i < 6; i = i + 1) {\n  var a = Math.random() * 2 - 1;\n  boxes.push(new Box(i * 50, i * 30, 100, a));\n}\n// Do the first update\nupdateAll();\n\nfunction Box(x, y, size, a) {\n  this.x = x;\n  this.y = y;\n  this.size = size;\n  this.angle = a;\n  this.dx = 0;\n  this.dy = 0;\n\n  this.update = function() {\n    this.angle += rotateSpeed;\n    this.stroke();\n  };\n  \n  this.stroke = function() {\n    c.save();\n    var x = this.x + this.size / 2;\n    var y = this.y + this.size / 2;\n    c.translate(x, y);\n    c.rotate(this.angle);\n    c.strokeRect(-this.size / 2, -this.size / 2,\n                 this.size, this.size);\n    c.restore();\n  };\n}\n",
    }, {message: "updateAll()只调用box的update().  在box中update()改变角度，然后绘制box. 每个box都知道如何更新和绘制自己.",}, {
        message: "让我们把box移动一下!  我们要做的就是用 <span class=tutor-code>dx</span> 和 <span class=tutor-code>dy</span>去更新.  看一看<span class=tutor-code>Box</span>是如何被更新的!",
        code: "function Box(x, y, size, a, dx, dy, da) {\n  this.x = x;\n  this.y = y;\n  this.size = size;\n  this.angle = a;\n  this.dx = dx;\n  this.dy = dy;\n  this.da = da;\n\n  this.update = function() {\n    this.angle += this.da;\n    this.x = this.x + this.dx;\n    this.y = this.y + this.dy;\n    // Bounce off the edges\n    if (this.x < 0 ||\n        this.x + this.size > w) {\n      this.dx = -this.dx;\n      this.da = -this.da;\n    }\n    if (this.y < 0 ||\n        this.y + this.size > h) {\n      this.dy = -this.dy;\n      this.da = -this.da;\n    }\n    this.stroke();\n  };\n  \n  this.stroke = function() {\n    c.save();\n    var x = this.x + this.size / 2;\n    var y = this.y + this.size / 2;\n    c.translate(x, y);\n    c.rotate(this.angle);\n    c.strokeRect(-this.size / 2, -this.size / 2,\n                 this.size, this.size);\n    c.restore();\n  };\n}\n\nvar timeStep = 50; // In milliseconds\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar cmTID;\n\nfunction updateAll() {\n  c.clearRect(0, 0, w, h);\n  for (var i = 0; i < boxes.length; i = i + 1) {\n    boxes[i].update();\n  }\n  clearTimeout(cmTID);\n  cmTID = setTimeout(updateAll, timeStep);\n}\n\n// Create the boxes\nvar boxes = [];\nvar s = 80;\nfor (var i = 0; i < 3; i = i + 1) {\n  var x = Math.random() * (w - s);\n  var y = Math.random() * (h - s);\n  var a = Math.random() * 2 - 1;\n  var dx = Math.random() * 2 - 1;\n  var dy = Math.random() * 2 - 1;\n  var da = 0.1 * (Math.random() * 2 - 1);\n  boxes.push(new Box(x, y, s, a, dx, dy, da));\n}\n// Do the first update\nupdateAll();\n\n",
        lessonSection: "Velocity and Collisions",
    }, {message: "这有点复杂，但只是一点点。  每当一个盒子被告知要update(), 它通过速度(<span class=tutor-code>dx</span> 和 <span class=tutor-code>dy</span>)来移动， 并以角速度 (<span class=tutor-code>da</span>)旋转.",},
    {message: "如果一个盒子超出屏幕边缘，我们就会翻转它的速度，使它看起来反弹！太酷了!",}, {
        message: "这里有一个新东西.  当box在屏幕上检查它是否超出时，有一些你以前没见过的东西， <span class=tutor-code>||</span>",
        lessonSection: "Bitwise Operators (And and Or)",
    }, {message: "<span class=tutor-code>||</span> 意思是或 <i>or</i>, 与此同时，第一个if语句检查盒子是否超出了左边或右边，第二个检查是否超出顶部或底部。  言之有理?",},
    {message: "还有<i>and</i>的另一种说法, 两者都必须是正确的（true）, 这个符号就是 <span class=tutor-code>&&</span>.  因此, <span class=tutor-code>||</span> 意思是 <i>or</i> ， <span class=tutor-code>&&</span> 意思是 <i>and</i>.",}, {
        message: "重新做点有乐趣的事。你试过放很多箱子了吗? 试一试!让它有10个boxes！或50 !",
        lessonSection: "Easy with Objects",
    }, {message: "看到所有这些箱子，它们的位置，角度，速度，以及其他所有的东西，使用对象(objects)来定义是不是变得容易?  一旦你说出一个盒子的对象是什么，你就很容易创造出许多这样的东西！",}, {
        message: "你现在已经接近课程的尾声了。但是我还有一些有趣的事情要告诉你。",
        code: "",
        hiddenCode: "var c = document.getElementById('pane').getContext('2d');\nfunction rgba(r,g,b,a) {return 'rgba('+[r,g,b,a].join(',')+')';}\nfunction rgb(r,g,b,a) {return 'rgb('+[r,g,b].join(',')+')';}\n\n",
        lessonSection: "Circles, Arcs, and Balls",
    }, {message: "现在你们已经知道了物体的速度，我们实际上已经非常接近能够做一些很酷的事情了比如让球弹起来。  我们所需要的只是一点点物理，一些加速度和我们的速度！",}, {
        message: "这是一个 <span class=tutor-code>Ball</span> 对象.  这很像你之前看到的Box对象，但有区别。看一看代码。",
        code: "function Ball(x, y, r, dx, dy) {\n  this.x = x;\n  this.y = y;\n  this.r = r;\n  this.dx = dx;\n  this.dy = dy;\n\n  this.update = function() {\n    this.x = this.x + this.dx;\n    this.y = this.y + this.dy;\n    // Bounce off the edges\n    if (this.x - this.r < 0 ||\n        this.x + this.r > w) {\n      this.dx = -this.dx;\n    }\n    if (this.y - this.r < 0 ||\n        this.y + this.r > h) {\n      this.dy = -this.dy;\n    }\n    this.stroke();\n  };\n  \n  this.stroke = function() {\n    c.beginPath();\n    c.arc(this.x, this.y, this.r,\n                 0, Math.PI * 2);\n    c.stroke();\n  };\n}\n\nvar timeStep = 50; // In milliseconds\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar cmTID;\n\nfunction updateAll() {\n  c.clearRect(0, 0, w, h);\n  for (var i = 0; i < balls.length; i = i + 1) {\n    balls[i].update();\n  }\n  clearTimeout(cmTID);\n  cmTID = setTimeout(updateAll, timeStep);\n}\n\n// Create the balls\nvar balls = [];\nvar r = 40;\nfor (var i = 0; i < 1; i = i + 1) {\n  var x = Math.random() * (w - r * 2) + r;\n  var y = Math.random() * (h - r * 2) + r;\n  var dx = Math.random() * 2 - 1;\n  var dy = Math.random() * 2 - 1;\n  \n  balls.push(new Ball(x, y, r, dx, dy));\n}\n// Do the first update\nupdateAll();\n\n",
        hiddenCode: "var c = document.getElementById('pane').getContext('2d');\ndocument.stopAnimation = function() {clearTimeout(cmTID);};\nfunction rgba(r,g,b,a) {return 'rgba('+[r,g,b,a].join(',')+')';}\nfunction rgb(r,g,b,a) {return 'rgb('+[r,g,b].join(',')+')';}\n\n"
    }, {message: "一个很大的区别是球是圆的，所以角度不重要。  看一下代码。没有角了，对吧?",},
    {message: "另一个很大的区别是我们使用arc()来画圆。  弧(arc)是很酷的，但是画一个圆就有点复杂了。让我解释一下它们是如何工作的。",},
    {message: "要在Javascript中画一个圆，你需要调用的是<span class=tutor-code>c.arc(x, y, r, 0, Math.PI * 2);</span>,  其中(x, y) 是圆的圆心, r是半径，然后是 0 和 <span class=tutor-code>Math.PI * 2</span> 的意思是从0度到360度画一个弧 (因为 2 * pi 在弧度中是 360 度).",},
    {message: "因为我们从中间画了一个圈，很多其他的东西都变了，比如我们如何检查我们是否需要从两边弹回来。",},
    {message: "再看一遍代码。现在更有意义了吗?",}, {
        message: "好的，现在我们要做一个跳跃的球。  需要物理知识，我们需要速度和加速度。  到目前为止，我们已经有了速度，但是没有加速度（acceleration）。  让我们添加一个加速度!在这里!",
        code: "function Ball(x, y, r, dx, dy) {\n  this.x = x;\n  this.y = y;\n  this.r = r;\n  this.dx = dx;\n  this.dy = dy;\n\n  this.update = function() {\n    // Bounce off the edges\n    if (this.x - this.r + this.dx < 0 ||\n        this.x + this.r + this.dx > w) {\n      this.dx = -this.dx;\n    }\n    if (this.y - this.r + this.dy < 0 ||\n        this.y + this.r + this.dy > h) {\n      this.dy = -this.dy;\n    } else {\n      // Our only acceleration is gravity\n      this.dy += gravity;\n    }\n    \n    this.x = this.x + this.dx;\n    this.y = this.y + this.dy;\n    \n    this.stroke();\n  };\n  \n  this.stroke = function() {\n    c.beginPath();\n    c.arc(this.x, this.y, this.r,\n                 0, Math.PI * 2);\n    c.stroke();\n  };\n}\n\nvar gravity = 0.05;\nvar timeStep = 25; // In milliseconds\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar cmTID;\n\nfunction updateAll() {\n  c.clearRect(0, 0, w, h);\n  for (var i = 0; i < balls.length; i = i + 1) {\n    balls[i].update();\n  }\n  clearTimeout(cmTID);\n  cmTID = setTimeout(updateAll, timeStep);\n}\n\n// Create the balls\nvar balls = [];\nvar r = 40;\nfor (var i = 0; i < 1; i = i + 1) {\n  var x = Math.random() * (w - r * 2) + r;\n  var y = Math.random() * (h - r * 2) + r;\n  var dx = Math.random() * 2 - 1;\n  var dy = Math.random() * 2 - 1;\n  \n  balls.push(new Ball(x, y, r, dx, dy));\n}\n// Do the first update\nupdateAll();\n\n",
        lessonSection: "Acceleration, Velocity, and Physics",
    }, {message: "你看到了吗?现在，每次我们在一个球上update() (这个球没有跳动，只是为了简化), 我们通过引力改变了向下的速度 (<span class=tutor-code>dy</span>).",},
    {message: "很酷!试着加个15-15个球，然后看一段时间。这是一个充满重力和跳跃的完整的物理模拟！非常有趣!",}, {
        message: "让我再给你们看一件东西，然后我们再从弹球开始。  所谓的部分弹性碰撞（partially elastic collision）.",
        code: "function Ball(x, y, r, dx, dy) {\n  this.x = x;\n  this.y = y;\n  this.r = r;\n  this.dx = dx;\n  this.dy = dy;\n\n  this.update = function() {\n    // Bounce off the edges\n    if (this.x - this.r + this.dx < 0 ||\n        this.x + this.r + this.dx > w) {\n      this.dx = -this.dx * friction;\n    }\n    if (this.y - this.r + this.dy < 0 ||\n        this.y + this.r + this.dy > h) {\n      this.dy = -this.dy * friction;\n    } else {\n      // Our only acceleration is gravity\n      this.dy += gravity;\n    }\n    \n    this.x = this.x + this.dx;\n    this.y = this.y + this.dy;\n    \n    this.stroke();\n  };\n  \n  this.stroke = function() {\n    c.beginPath();\n    c.arc(this.x, this.y, this.r,\n                 0, Math.PI * 2);\n    c.stroke();\n  };\n}\n\nvar gravity = 0.2;\nvar friction = 0.8;\nvar timeStep = 25; // In milliseconds\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar cmTID;\n\nfunction updateAll() {\n  c.clearRect(0, 0, w, h);\n  for (var i = 0; i < balls.length; i = i + 1) {\n    balls[i].update();\n  }\n  clearTimeout(cmTID);\n  cmTID = setTimeout(updateAll, timeStep);\n}\n\n// Create the balls\nvar balls = [];\nvar r = 40;\nfor (var i = 0; i < 4; i = i + 1) {\n  var x = Math.random() * (w - r * 2) + r;\n  var y = Math.random() * (h - r * 2) + r;\n  var dx = Math.random() * 2 - 1;\n  var dy = Math.random() * 2 - 1;\n  \n  balls.push(new Ball(x, y, r, dx, dy));\n}\n// Do the first update\nupdateAll();\n\n",
        lessonSection: "Collisions and Physics",
    }, {message: "在现实世界中，当事物发生碰撞时，它们之间的相互碰撞会比之前更慢.  这就是为什么，当你扔一个球时，它不会一直弹下去.",},
    {message: "如果你看一下更新中的代码，就会发现，当球从墙上弹回时，会产生摩擦力。  它使它们的反弹速度比它们的速度慢.  最终，所有的球都停止跳动，慢慢地滚到底部.",},
    {message: "很酷的模拟，并添加了一些现实主义。和它一起玩！  改变摩擦力，增加更多的球，增加重力，改变时间。试着把它弄乱！",}, {
        message: "在上一节课中，让我们先来研究一下鼠标。这是一件很有趣的事！",
        code: "",
        hiddenCode: "var c = document.getElementById('pane').getContext('2d');\nfunction rgba(r,g,b,a) {return 'rgba('+[r,g,b,a].join(',')+')';}\nfunction rgb(r,g,b,a) {return 'rgb('+[r,g,b].join(',')+')';}\n\n",
        lessonSection: "Mouse Events",
    }, {
        message: "这是一个粘在鼠标身上的球。每当鼠标移动，球就会在鼠标上方重新移动.",
        code: "var pane = document.getElementById('pane');\nvar w = c.canvas.width;\nvar h = c.canvas.height;\n\npane.onmousemove = function(evt) {\n  var x = evt.clientX;\n  var y = evt.clientY;\n  \n  c.clearRect(0, 0, w, h);\n  c.beginPath();\n  c.arc(x, y, 40, 0, Math.PI * 2);\n  c.stroke();\n};\n",
    }, {message: "它是如何工作的呢?首先，将变量面板设置为名为“pane”的web页面的元素，而这正是我们的绘图画布所处的位置",},
    {message: "<span class=tutor-code>pane.onmousemove = function(evt) {};</span> 是非常重要的.  该代码将一个函数绑定到元素'pane'上的 <i>onmousemove</i> 事件, 也就是说，每当鼠标移动到绘图画布的时候，这个函数就会被调用.",},
    {message: "我们的函数会询问事件鼠标所在的位置(the <span class=tutor-code>clientX</span> 和 <span class=tutor-code>clientY</span>) ，然后画一个大圈.  讲得通吗？",}, {
        message: "真正酷的是我们可以把它和动画结合起来。看看这个!",
        code: "function Ball(x, y, r, dx, dy) {\n  this.x = x;\n  this.y = y;\n  this.r = r;\n  this.dx = dx;\n  this.dy = dy;\n\n  this.update = function() {\n    // Acceleration toward the mouse\n    var diffX = mouseX - this.x;\n    var diffY = mouseY - this.y;\n    var dist2 = diffX * diffX + diffY * diffY + 1;\n    var ddx = accel * Math.abs(diffX) *\n              diffX / dist2;\n    var ddy = accel * Math.abs(diffY) *\n              diffY / dist2;\n    \n    // Bounce off the edges\n    if (this.x - this.r + this.dx < 0 ||\n        this.x + this.r + this.dx > w) {\n      this.dx = -this.dx * friction;\n    } else {\n      this.dx += ddx;\n    }\n    if (this.y - this.r + this.dy < 0 ||\n        this.y + this.r + this.dy > h) {\n      this.dy = -this.dy * friction;\n    } else {\n      this.dy += ddy;\n    }\n    \n    this.x = this.x + this.dx;\n    this.y = this.y + this.dy;\n    \n    // Enforce the boundaries\n    this.x = Math.max(this.r, this.x);\n    this.x = Math.min(w - this.r, this.x);\n    this.y = Math.max(this.r, this.y);\n    this.y = Math.min(h - this.r, this.y);\n    \n    this.stroke();\n  };\n  \n  this.stroke = function() {\n    c.beginPath();\n    c.arc(this.x, this.y, this.r,\n                 0, Math.PI * 2);\n    c.stroke();\n  };\n}\n\nvar accel = 0.1;\nvar friction = 0.8;\nvar mouseX = 0;\nvar mouseY = 0;\nvar timeStep = 25; // In milliseconds\nvar w = c.canvas.width;\nvar h = c.canvas.height;\nvar cmTID;\n\nfunction updateAll() {\n  c.clearRect(0, 0, w, h);\n  for (var i = 0; i < balls.length; i = i + 1) {\n    balls[i].update();\n  }\n  clearTimeout(cmTID);\n  cmTID = setTimeout(updateAll, timeStep);\n}\n\n// Create the balls\nvar balls = [];\nvar r = 40;\nfor (var i = 0; i < 4; i = i + 1) {\n  var x = Math.random() * (w - r * 2) + r;\n  var y = Math.random() * (h - r * 2) + r;\n  var dx = Math.random() * 2 - 1;\n  var dy = Math.random() * 2 - 1;\n  \n  balls.push(new Ball(x, y, r, dx, dy));\n}\n// Do the first update\nupdateAll();\n\n// Store the mouse position when the mouse moves\nvar pane = document.getElementById('pane');\npane.onmousemove = function(evt) {\n  mouseX = evt.clientX;\n  mouseY = evt.clientY;\n};\n",
        hiddenCode: "var c = document.getElementById('pane').getContext('2d');\ndocument.stopAnimation = function() {clearTimeout(cmTID);};\nfunction rgba(r,g,b,a) {return 'rgba('+[r,g,b,a].join(',')+')';}\nfunction rgb(r,g,b,a) {return 'rgb('+[r,g,b].join(',')+')';}\n\n",
        lessonSection: "Springs and Physics",
    }, {message: "它的作用是，每当鼠标移动到画布区域时， 它设置了 <span class=tutor-code>mouseX</span> 和 <span class=tutor-code>mouseY</span> 作为鼠标的位置.",},
    {message: "然后，当每一个球被更新时，它就会计算出离鼠标有多远，并向它加速。",},
    {message: "加速度是距离的平方根，所以它在很远的地方就会拉得更大。  想象一下，所有的球都是通过小橡皮筋或弹簧连接到鼠标身上的。  有点像这样。",},
    {message: "试着把球变小一点！并添加更多的！我喜欢它，大约有40个小球在追逐鼠标。",}, {
        message: "伟大的工作!你学到了什么喜欢的东西?这是有趣的吗?",
        code: "",
        hiddenCode: "var c = document.getElementById('pane').getContext('2d');\nfunction rgba(r,g,b,a) {return 'rgba('+[r,g,b,a].join(',')+')';}\nfunction rgb(r,g,b,a) {return 'rgb('+[r,g,b].join(',')+')';}\n\n",
        lessonSection: "The End",
    }, {
        message: "哇,你做的一切!祝贺你,干得好!  很多这些都很困难。你给我留下了深刻的印象!我希望你喜欢它！",
        code: 'var pane = document.getElementById(\'pane\');\nvar s = 3;\n\npane.onmousemove = function(evt) {\n  c.fillStyle = randomRGBA();\n  var x = evt.clientX;\n  var y = evt.clientY;\n  c.fillRect(x - s / 2, y - s / 2, s, s);};\n\nfunction randomRGBA() {\n  var r = randInt(255);\n  var g = randInt(255);\n  var b = randInt(255);\n  var a = Math.random();\n  var rgba = [r,g,b,a].join(",");\n  return "rgba(" + rgba + ")";\n}\nfunction randInt(limit) {\n  var x = Math.random() * limit;\n  return Math.floor(x);\n}\n'
    },];


// To keep JSHint from complaining about variables and functions in
// the hidden code, list them here.  The boolean is whether they can
// be overridden by user code.
var predefForJSHint = {c: true, 
					   rgb: true, 
					   rgba: true,
					  };


// Images for tutor, referenced by the lessons to switch
// [ This is disabled.  It was too distracting in playtesting.
// still could be used later to switch poses in Code Maven. ]
var tutorImages = [ "i/monster2.png",
				  ];



/*
IDEAS FOR MORE:

onmousedown to clear screen?  Or to make boxes repelled instead of attracted?
Done enough fractals?  If more, snowflake fractal? Dragon curve? Sierpinski's Triangle?
A snake?  First box attracted to mouse, other boxes attracted to previous box?
Birds?  Boxes try to keep distance from each other?
Game of life?  Wolves and sheep?
*/
