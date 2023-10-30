const About = () => {
    return (
        <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
            </div>
            <div>
                <p className="mb-4">
                    {/* <span className="group/korok inline-flex lg:cursor-[url('/images/koroks/Elma.png'),_pointer] lg:font-medium lg:text-slate-200"> */}
                    <span className="group/korok inline-flex cursor-pointer lg:font-medium">
                        <span className="group-hover/korok:text-red-400 transition duration-75 group-hover/korok:-translate-y-px delay-[50ms]" aria-hidden="true">
                            안
                        </span>
                        <span className="group-hover/korok:text-orange-400 transition duration-75 group-hover/korok:-translate-y-px delay-[75ms]" aria-hidden="true">
                            녕
                        </span>
                        <span className="group-hover/korok:text-yellow-400 transition duration-75 group-hover/korok:-translate-y-px delay-[100ms]" aria-hidden="true">
                            하
                        </span>
                        <span className="group-hover/korok:text-lime-400 transition duration-75 group-hover/korok:-translate-y-px delay-[125ms]" aria-hidden="true">
                            세
                        </span>
                        <span className="group-hover/korok:text-green-400 transition duration-75 group-hover/korok:-translate-y-px delay-[150ms]" aria-hidden="true">
                            요
                        </span>
                        <span className="group-hover/korok:text-teal-400 transition duration-75 group-hover/korok:-translate-y-px delay-[175ms]" aria-hidden="true">
                            ,
                        </span>
                    </span>
                    <br />
                </p>
                <p className="mb-4 text-primary">
                    끊임엇는 배움을 추구하지만 그로인한 경험과 처음의 마음가짐을 잃지 않고 변함없는 사람이 되고 싶은 프론트엔드 개발자 정승연입니다. 저는 어떤일이 일어나는 원인에 대해 추론하고
                    생각하기를 좋아합니다. 그렇기 때문에 초기 단계부터 구축하여 개선까지 시켜나가는 프로덕트에 제 흔적을 남기고 싶은 갈증을 가지고 있습니다.
                </p>
                <p className="mb-4 font-bold">믿을 수 있고 듬직한 사람이 되겠습니다.</p>
                <p>주어진 업무에 정을 쉽게 붙이는 편입니다. 그렇기에 더더욱 책임감을 가지고 성실하게 업무를 수행하는 것에 자신있습니다.</p>
                {/* <p>믿을 수 있고 듬직한 동료. 같이 일하고 싶은 동료가 되겠습니다.</p> */}
            </div>
        </section>
    );
};

export default About;
