import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts'
import style from '@/app/ui/home.module.css';
import clsx from 'clsx';
import Image from 'next/image';
export default function Page() {
    console.log(style, style.menuPC);
   
    return (
        <div className='p-6'>
            {/* 头部 */}
            <div className={style.menuPC}>
                <nav className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-3 md:h-12 align-center justify-between">
                    <div className='text-white  margin-left-4'>
                        <Image
                            src="/logo.png"
                            width={80}
                            height={50}
                            className="hidden md:block"
                            alt="Screenshots of the dashboard project showing desktop version"
                        />

                    </div>

                    <div className='flex gap-4 text-white align-center'>
                        <div>三位扫描仪</div>
                        <div>应用案例</div>
                        <div>服务与支持</div>
                        <div>诚聘英才</div>
                        <div>关于我们</div>
                    </div>
                    <div className='flex gap-4 text-white'>
                        <div>京东</div>
                        <div>天猫</div>
                        <div>抖音</div>
                        <div>个人中心</div>
                        <div>翻译</div>
                    </div>

                </nav>
            </div>
            <div className={style.menu}>
                <nav className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-3 md:h-12 align-center justify-between">
                    <div className='text-white  margin-left-4'>
                        <Image
                            src="/logo.png"
                            width={50}
                            height={30}
                            className="block md:hidden"
                            alt="Screenshot of the dashboard project showing mobile version"
                        />
                    </div>

                    <div className='flex gap-4 text-white'>
                        <div>全球</div>
                        <div>个人中心</div>
                        <div>翻译</div>
                    </div>

                </nav>
            </div>
            <main className="flex  flex-col p-6">
                {/* 主图 */}
                <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
                    <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-4/5 md:px-20">
                        <Image
                            src="/main.jpg"
                            width={1000}
                            height={760}
                            className="hidden md:block"
                            alt="Screenshots of the dashboard project showing desktop version"
                        />
                        <Image
                            src="/main.jpg"
                            width={560}
                            height={620}
                            className="block md:hidden"
                            alt="Screenshot of the dashboard project showing mobile version"
                        />
                    </div>
                    <div className="p-6 md:w-3/5 md:px-28 md:py-12">
                        <div>三维扫描仪</div>
                        <div className='flex items-center justify-center gap-4 font-size-12 bg-gray-50 rounded-lg m-1'>
                            <span className=''>特惠价</span><span className=''>#88888</span><span>累计评价 <span>69</span></span>
                        </div>
                        <div className='flex items-center'>
                            <div>选择颜色</div>
                            <div>标准</div>
                            <div>专业</div>
                            <div>全家福</div>
                        </div>
                        <div>
                            <input type="text" />
                            <button >添加购物车</button>
                        </div>
                    </div>

                </div>
                {/* 特点 */}
                <div className='flex items-center justify-center'>产品特点</div>
                <div className={style.menuPC}>
                    <div className='grid-cols-3 grid gap-4 m-4'>
                        <div className='gap-4  rounded-lg ' >
                            <Image
                                src="/01.jpg"
                                width={1000}
                                height={760}
                                className="hidden md:block"
                                alt="Screenshots of the dashboard project showing desktop version"
                            />
                            <Image
                                src="/01.jpg"
                                width={560}
                                height={620}
                                className="block md:hidden"
                                alt="Screenshot of the dashboard project showing mobile version"
                            /></div>
                        <div className='gap-4  rounded-lg ' > <Image
                            src="/02.jpg"
                            width={1000}
                            height={760}
                            className="hidden md:block"
                            alt="Screenshots of the dashboard project showing desktop version"
                        />
                            <Image
                                src="/02.jpg"
                                width={560}
                                height={620}
                                className="block md:hidden"
                                alt="Screenshot of the dashboard project showing mobile version"
                            /></div>
                        <div className='gap-4  rounded-lg ' > <Image
                            src="/03.jpg"
                            width={1000}
                            height={760}
                            className="hidden md:block"
                            alt="Screenshots of the dashboard project showing desktop version"
                        />
                            <Image
                                src="/03.jpg"
                                width={560}
                                height={620}
                                className="block md:hidden"
                                alt="Screenshot of the dashboard project showing mobile version"
                            /></div>
                        <div className='gap-4  rounded-lg ' > <Image
                            src="/04.jpg"
                            width={1000}
                            height={760}
                            className="hidden md:block"
                            alt="Screenshots of the dashboard project showing desktop version"
                        />
                            <Image
                                src="/04.jpg"
                                width={560}
                                height={620}
                                className="block md:hidden"
                                alt="Screenshot of the dashboard project showing mobile version"
                            /></div>
                        <div className='gap-4  rounded-lg ' > <Image
                            src="/05.jpg"
                            width={1000}
                            height={760}
                            className="hidden md:block"
                            alt="Screenshots of the dashboard project showing desktop version"
                        />
                            <Image
                                src="/05.jpg"
                                width={560}
                                height={620}
                                className="block md:hidden"
                                alt="Screenshot of the dashboard project showing mobile version"
                            /></div>
                            <div className='gap-4  rounded-lg ' > <Image
                            src="/06.jpg"
                            width={1000}
                            height={760}
                            className="hidden md:block"
                            alt="Screenshots of the dashboard project showing desktop version"
                        />
                            <Image
                                src="/06.jpg"
                                width={560}
                                height={620}
                                className="block md:hidden"
                                alt="Screenshot of the dashboard project showing mobile version"
                            /></div>

                    </div>
                </div>
                <div className={style.menu}>
                    <div className='grid-cols-2 grid gap-4 m-4'>
                        <div className='gap-4  rounded-lg ' >
                            <Image
                                src="/01.jpg"
                                width={1000}
                                height={760}
                                className="hidden md:block"
                                alt="Screenshots of the dashboard project showing desktop version"
                            />
                            <Image
                                src="/01.jpg"
                                width={560}
                                height={620}
                                className="block md:hidden"
                                alt="Screenshot of the dashboard project showing mobile version"
                            /></div>
                        <div className='gap-4  rounded-lg ' > <Image
                            src="/02.jpg"
                            width={1000}
                            height={760}
                            className="hidden md:block"
                            alt="Screenshots of the dashboard project showing desktop version"
                        />
                            <Image
                                src="/02.jpg"
                                width={560}
                                height={620}
                                className="block md:hidden"
                                alt="Screenshot of the dashboard project showing mobile version"
                            /></div>
                        <div className='gap-4  rounded-lg ' > <Image
                            src="/03.jpg"
                            width={1000}
                            height={760}
                            className="hidden md:block"
                            alt="Screenshots of the dashboard project showing desktop version"
                        />
                            <Image
                                src="/03.jpg"
                                width={560}
                                height={620}
                                className="block md:hidden"
                                alt="Screenshot of the dashboard project showing mobile version"
                            /></div>
                        <div className='gap-4  rounded-lg ' > <Image
                            src="/04.jpg"
                            width={1000}
                            height={760}
                            className="hidden md:block"
                            alt="Screenshots of the dashboard project showing desktop version"
                        />
                            <Image
                                src="/04.jpg"
                                width={560}
                                height={620}
                                className="block md:hidden"
                                alt="Screenshot of the dashboard project showing mobile version"
                            /></div>
                        <div className='gap-4  rounded-lg ' > <Image
                            src="/05.jpg"
                            width={1000}
                            height={760}
                            className="hidden md:block"
                            alt="Screenshots of the dashboard project showing desktop version"
                        />
                            <Image
                                src="/05.jpg"
                                width={560}
                                height={620}
                                className="block md:hidden"
                                alt="Screenshot of the dashboard project showing mobile version"
                            /></div>
                            <div className='gap-4  rounded-lg ' > <Image
                            src="/06.jpg"
                            width={1000}
                            height={760}
                            className="hidden md:block"
                            alt="Screenshots of the dashboard project showing desktop version"
                        />
                            <Image
                                src="/06.jpg"
                                width={560}
                                height={620}
                                className="block md:hidden"
                                alt="Screenshot of the dashboard project showing mobile version"
                            /></div>

                    </div>
                </div>

                {/* 信息 */}
                <div className={style.menuPC}>
                    <div className='flex  justify-between bg-gray-50 rounded-lg p-4 m-t-10 font-size-12'>
                        <div>
                            <div className='flex items-center justify-between p-4 '>
                                <div >产品名称</div>
                                <div>POP 3 Plus 三维扫描仪</div>
                            </div>
                            <div className='flex items-center justify-between p-4 '>
                                <div>最小点距 </div>
                                <div>0.05 mm</div>
                            </div>
                            <div className='flex items-center justify-between p-4 '>
                                <div>技术原理</div>
                                <div>双目红外微结构光</div>
                            </div>
                        </div>
                        <div>
                            <div className='flex items-center justify-between p-4 '>
                                <div>特殊物体扫描</div>
                                <div>扫描透明、深/黑色、高反光物体时，请使用喷粉/显影剂。</div>
                            </div>
                            <div className='flex items-center justify-between p-4 '>
                                <div>单帧重复精度</div>
                                <div>0.04 mm</div>
                            </div>
                            <div className='flex items-center justify-between p-4 '>
                                <div>扫描环境</div>
                                <div>室内、室外（避免在阳光直射环境下扫描）</div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={style.menu}>
                    <div className='flex items-center justify-between p-4 '>
                        <div >产品名称</div>
                        <div>POP 3 Plus 三维扫描仪</div>
                    </div>
                    <div className='flex items-center justify-between p-4 '>
                        <div>最小点距 </div>
                        <div>0.05 mm</div>
                    </div>
                    <div className='flex items-center justify-between p-4 '>
                        <div>技术原理</div>
                        <div>双目红外微结构光</div>
                    </div>
                    <div className='flex items-center justify-between p-4 '>
                        <div>特殊物体扫描</div>
                        <div>扫描透明、深/黑色、高反光物体时，请使用喷粉/显影剂。</div>
                    </div>
                    <div className='flex items-center justify-between p-4 '>
                        <div>单帧重复精度</div>
                        <div>0.04 mm</div>
                    </div>
                    <div className='flex items-center justify-between p-4 '>
                        <div>扫描环境</div>
                        <div>室内、室外（避免在阳光直射环境下扫描）</div>
                    </div>
                </div>

                <div className=' bg-gray-50 rounded-lg p-4 font-size-12 '>
                    备注：
                    1. 单帧重复精度是指多次重复测定同一物体时各测定值之间彼此相符合的程度。单帧精度指在一定实验条件下多次测定的平均值与实际值相符合的程度。单帧重复精度与单帧精度兼为在实验室标准环境采用标准测试方法得到，实际使用环境下的结果可能有所不同。
                    2. 产品采用一级激光投射器，请避免长时间近距离直视投射器！详情请参阅一级激光标准文件。
                    3. 室外扫描时，请避开强烈太阳光。
                    4. 部分产品有闪光灯，可能不适合患有光敏性癫痫的人群使用。
                </div>
            </main>
        </div>
    );
}


