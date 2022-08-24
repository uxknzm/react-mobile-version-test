import React from 'react';
import s from './Footer.module.css'


const Footer = () => {

    const [activeIndex, setActiveIndex] = React.useState(0)

    return (
        <div className={s.footer__wrapper}>
            <div className={s.footer__icon}>
                <a className={s.footer__a} href="#">
                    <svg onClick={() => setActiveIndex(0)} width="68" height="45" viewBox="0 0 68 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.9438 42V34.788H17.5078V33.78H12.8278V42H13.9438ZM22.5332 42L20.3132 36.612H19.1612L16.9652 42H18.0332L19.7132 37.752L21.4052 42H22.5332ZM28.7986 42V36.612H27.8626L27.7306 37.392C27.5026 37.104 27.2386 36.888 26.9266 36.732C26.6146 36.576 26.2666 36.492 25.9066 36.492C25.1506 36.492 24.5266 36.768 24.0226 37.296C23.5186 37.836 23.2786 38.508 23.2786 39.312C23.2786 40.116 23.5186 40.788 24.0226 41.316C24.5266 41.856 25.1506 42.12 25.9066 42.12C26.2666 42.12 26.6146 42.048 26.9266 41.892C27.2386 41.736 27.5026 41.508 27.7306 41.22L27.8626 42H28.7986ZM24.3706 39.312C24.3706 38.784 24.5266 38.352 24.8506 37.992C25.1746 37.644 25.5826 37.464 26.0746 37.464C26.5546 37.464 26.9626 37.644 27.2986 37.992C27.6226 38.352 27.7906 38.784 27.7906 39.312C27.7906 39.84 27.6226 40.272 27.2986 40.62C26.9626 40.98 26.5546 41.148 26.0746 41.148C25.5826 41.148 25.1746 40.98 24.8506 40.62C24.5266 40.272 24.3706 39.84 24.3706 39.312ZM33.2504 42C34.0184 42 34.5944 41.88 35.0024 41.628C35.4104 41.376 35.6144 41.004 35.6144 40.5C35.6144 40.176 35.5184 39.9 35.3504 39.684C35.1824 39.468 34.9184 39.312 34.5704 39.204C34.8344 39.096 35.0264 38.94 35.1704 38.736C35.3024 38.544 35.3744 38.304 35.3744 38.016C35.3744 37.572 35.1944 37.224 34.8344 36.984C34.4744 36.744 33.9704 36.612 33.3464 36.612H30.6704V42H33.2504ZM34.2824 38.136C34.2824 38.376 34.1984 38.544 34.0304 38.664C33.8624 38.784 33.6104 38.844 33.2984 38.844H31.7264V37.428H33.2984C33.6104 37.428 33.8624 37.488 34.0304 37.608C34.1984 37.728 34.2824 37.908 34.2824 38.136ZM34.4984 40.428C34.4984 40.692 34.3904 40.884 34.1984 41.004C34.0064 41.124 33.7064 41.184 33.3224 41.184H31.7264V39.66H33.3224C33.7184 39.66 34.0184 39.732 34.2104 39.852C34.4024 39.984 34.4984 40.176 34.4984 40.428ZM41.9988 42V36.612H40.9068V38.76H38.2428V36.612H37.1508V42H38.2428V39.696H40.9068V42H41.9988ZM49.0017 42V36.612H48.0657L47.9337 37.392C47.7057 37.104 47.4417 36.888 47.1297 36.732C46.8177 36.576 46.4697 36.492 46.1097 36.492C45.3537 36.492 44.7297 36.768 44.2257 37.296C43.7217 37.836 43.4817 38.508 43.4817 39.312C43.4817 40.116 43.7217 40.788 44.2257 41.316C44.7297 41.856 45.3537 42.12 46.1097 42.12C46.4697 42.12 46.8177 42.048 47.1297 41.892C47.4417 41.736 47.7057 41.508 47.9337 41.22L48.0657 42H49.0017ZM44.5737 39.312C44.5737 38.784 44.7297 38.352 45.0537 37.992C45.3777 37.644 45.7857 37.464 46.2777 37.464C46.7577 37.464 47.1657 37.644 47.5017 37.992C47.8257 38.352 47.9937 38.784 47.9937 39.312C47.9937 39.84 47.8257 40.272 47.5017 40.62C47.1657 40.98 46.7577 41.148 46.2777 41.148C45.7857 41.148 45.3777 40.98 45.0537 40.62C44.7297 40.272 44.5737 39.84 44.5737 39.312ZM50.6575 38.28C50.6575 38.688 50.7775 39.012 51.0295 39.276C51.2815 39.54 51.6415 39.72 52.0975 39.816L50.4295 42H51.6655L53.1655 39.948H54.3175V42H55.3975V36.612H52.8415C52.1815 36.612 51.6535 36.768 51.2575 37.056C50.8495 37.356 50.6575 37.764 50.6575 38.28ZM51.7735 38.28C51.7735 38.028 51.8695 37.824 52.0615 37.68C52.2535 37.536 52.5175 37.452 52.8535 37.452H54.3175V39.096H52.8535C52.5175 39.096 52.2535 39.024 52.0615 38.88C51.8695 38.736 51.7735 38.544 51.7735 38.28Z" fill={activeIndex === 0 ? '#252424' : '#7E839C'} />
                        <path fillRule="evenodd" clipRule="evenodd" d="M33.3745 1.58801C33.4743 1.47066 33.6555 1.47066 33.7553 1.58802L42.5668 11.9464C42.7049 12.1088 42.5895 12.3584 42.3764 12.3584H41.7474C41.057 12.3584 40.4974 12.9181 40.4974 13.6084V21.1567C40.4974 21.2948 40.3855 21.4067 40.2474 21.4067H36.6649V21.3705V16.6205C36.6649 15.5159 35.7694 14.6205 34.6649 14.6205H32.4698C31.3653 14.6205 30.4698 15.5159 30.4698 16.6205V21.3705V21.4067H26.8824C26.7443 21.4067 26.6324 21.2948 26.6324 21.1567V13.6084C26.6324 12.9181 26.0727 12.3584 25.3824 12.3584H24.7534C24.5402 12.3584 24.4248 12.1088 24.5629 11.9464L33.3745 1.58801ZM34.8978 0.616104C34.199 -0.205365 32.9307 -0.20537 32.2319 0.616103L23.4204 10.9745C22.4537 12.111 23.2613 13.8584 24.7534 13.8584H25.1324V21.1567C25.1324 22.1232 25.9159 22.9067 26.8824 22.9067H40.2474C41.2139 22.9067 41.9974 22.1232 41.9974 21.1567V13.8584H42.3764C43.8684 13.8584 44.6761 12.111 43.7093 10.9745L34.8978 0.616104ZM31.9698 16.6205C31.9698 16.3443 32.1937 16.1205 32.4698 16.1205H34.6649C34.941 16.1205 35.1649 16.3443 35.1649 16.6205V19.8705V21.3705H33.6649H33.4698H31.9698V19.8705V16.6205Z" fill={activeIndex === 0 ? '#252424' : '#7E839C'} />
                    </svg>
                </a>
                <a className={s.footer__a} href="#">
                    <svg onClick={() => setActiveIndex(1)} width="69" height="46" viewBox="0 0 69 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.4686 43C15.4166 43 16.1726 42.796 16.7246 42.376C17.2766 41.968 17.5646 41.404 17.5646 40.696C17.5646 40.252 17.4206 39.856 17.1566 39.508C16.8806 39.172 16.4966 38.896 15.9926 38.704C16.3766 38.512 16.6766 38.272 16.8926 37.96C17.0966 37.66 17.2046 37.312 17.2046 36.928C17.2046 36.256 16.9526 35.74 16.4606 35.356C15.9566 34.972 15.2726 34.78 14.4086 34.78H12.0446V43H14.4686ZM16.0766 37.012C16.0766 37.396 15.9326 37.708 15.6446 37.924C15.3566 38.152 14.9606 38.26 14.4686 38.26H13.1606V35.764H14.4686C14.9606 35.764 15.3566 35.884 15.6446 36.1C15.9326 36.328 16.0766 36.628 16.0766 37.012ZM16.4366 40.636C16.4366 41.08 16.2686 41.416 15.9326 41.656C15.5966 41.896 15.1286 42.016 14.5286 42.016H13.1606V39.244H14.5286C15.1286 39.244 15.5966 39.376 15.9326 39.616C16.2686 39.856 16.4366 40.204 16.4366 40.636ZM24.036 43V37.612H23.016L20.208 41.5V37.612H19.188V43H20.208L23.016 39.112V43H24.036ZM27.2708 38.548V43H28.3628V38.548H30.3548V37.612H25.2788V38.548H27.2708ZM37.1181 40.3C37.1181 39.508 36.8661 38.836 36.3621 38.296C35.8581 37.768 35.2341 37.492 34.4901 37.492C34.1181 37.492 33.7821 37.576 33.4701 37.732C33.1581 37.888 32.8821 38.104 32.6661 38.392L32.5341 37.612H31.5981V45.4H32.6901V42.256C32.9061 42.544 33.1701 42.76 33.4821 42.904C33.7941 43.048 34.1301 43.12 34.4901 43.12C35.2341 43.12 35.8581 42.856 36.3621 42.316C36.8661 41.788 37.1181 41.116 37.1181 40.3ZM34.3221 38.464C34.8021 38.464 35.2101 38.644 35.5341 38.992C35.8581 39.352 36.0261 39.784 36.0261 40.3C36.0261 40.828 35.8581 41.272 35.5341 41.62C35.2101 41.98 34.8021 42.148 34.3221 42.148C33.8301 42.148 33.4221 41.98 33.0981 41.62C32.7621 41.272 32.6061 40.828 32.6061 40.3C32.6061 39.784 32.7621 39.352 33.0981 38.992C33.4221 38.644 33.8301 38.464 34.3221 38.464ZM43.4539 43V37.612H42.4339L39.6259 41.5V37.612H38.6059V43H39.6259L42.4339 39.112V43H43.4539ZM50.1688 43V37.612H49.0768V39.76H46.4128V37.612H45.3208V43H46.4128V40.696H49.0768V43H50.1688ZM57.1716 43V37.612H56.2356L56.1036 38.392C55.8756 38.104 55.6116 37.888 55.2996 37.732C54.9876 37.576 54.6396 37.492 54.2796 37.492C53.5236 37.492 52.8996 37.768 52.3956 38.296C51.8916 38.836 51.6516 39.508 51.6516 40.312C51.6516 41.116 51.8916 41.788 52.3956 42.316C52.8996 42.856 53.5236 43.12 54.2796 43.12C54.6396 43.12 54.9876 43.048 55.2996 42.892C55.6116 42.736 55.8756 42.508 56.1036 42.22L56.2356 43H57.1716ZM52.7436 40.312C52.7436 39.784 52.8996 39.352 53.2236 38.992C53.5476 38.644 53.9556 38.464 54.4476 38.464C54.9276 38.464 55.3356 38.644 55.6716 38.992C55.9956 39.352 56.1636 39.784 56.1636 40.312C56.1636 40.84 55.9956 41.272 55.6716 41.62C55.3356 41.98 54.9276 42.148 54.4476 42.148C53.9556 42.148 53.5476 41.98 53.2236 41.62C52.8996 41.272 52.7436 40.84 52.7436 40.312Z" fill={activeIndex === 1 ? '#252424' : '#7E839C'} />
                        <path d="M30.6482 9.29112V3.02038C30.6482 2.8913 30.6971 2.76673 30.7901 2.67724C32.1773 1.34262 35.3981 -0.310936 38.4128 2.67407C38.5045 2.76488 38.5557 2.8913 38.5557 3.02038V9.29112" stroke={activeIndex === 1 ? '#252424' : '#7E839C'} strokeWidth="1.5" />
                        <path d="M42.1325 5.17267H27.0714C26.5424 5.17267 26.1049 5.5847 26.0732 6.11278L25.0636 22.9401C25.0291 23.5149 25.486 24 26.0618 24H43.1421C43.7179 24 44.1748 23.5149 44.1403 22.9401L43.1307 6.11278C43.099 5.5847 42.6615 5.17267 42.1325 5.17267Z" stroke={activeIndex === 1 ? '#252424' : '#7E839C'} strokeWidth="1.5" />
                    </svg>
                </a>
                <a href="/">
                    <svg width="68" height="80" viewBox="0 0 68 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.9384 69.704C18.3464 69.704 18.7304 69.788 19.1024 69.956C19.4624 70.124 19.8104 70.364 20.1344 70.676L20.8424 69.908C20.4344 69.5 19.9904 69.2 19.4984 68.984C19.0064 68.768 18.4904 68.66 17.9384 68.66C16.7624 68.66 15.7904 69.068 15.0104 69.872C14.2304 70.688 13.8464 71.696 13.8464 72.896C13.8464 74.096 14.2304 75.104 15.0104 75.908C15.7904 76.724 16.7624 77.12 17.9384 77.12C18.5024 77.12 19.0424 77.012 19.5464 76.784C20.0504 76.568 20.5184 76.22 20.9624 75.764L20.2304 74.984C19.8944 75.356 19.5464 75.632 19.1624 75.812C18.7784 75.992 18.3704 76.076 17.9384 76.076C17.0984 76.076 16.4024 75.776 15.8504 75.176C15.2984 74.576 15.0224 73.808 15.0224 72.896C15.0224 71.984 15.2984 71.228 15.8504 70.616C16.4024 70.016 17.0984 69.704 17.9384 69.704ZM23.7452 74.66C23.8652 74.66 23.9852 74.66 24.1052 74.648C24.2252 74.636 24.3332 74.612 24.4532 74.588L26.1452 77H27.4532L25.3652 74.108C25.5332 73.964 25.7012 73.784 25.8812 73.556C26.0492 73.34 26.2532 73.052 26.4692 72.704L27.2012 71.612H26.0252L25.2932 72.704C25.0532 73.064 24.8132 73.328 24.5732 73.472C24.3332 73.628 24.0572 73.7 23.7452 73.7H23.3132V71.612H22.2212V77H23.3132V74.66H23.7452ZM33.7439 77V71.612H32.8079L32.6759 72.392C32.4479 72.104 32.1839 71.888 31.8719 71.732C31.5599 71.576 31.2119 71.492 30.8519 71.492C30.0959 71.492 29.4719 71.768 28.9679 72.296C28.4639 72.836 28.2239 73.508 28.2239 74.312C28.2239 75.116 28.4639 75.788 28.9679 76.316C29.4719 76.856 30.0959 77.12 30.8519 77.12C31.2119 77.12 31.5599 77.048 31.8719 76.892C32.1839 76.736 32.4479 76.508 32.6759 76.22L32.8079 77H33.7439ZM29.3159 74.312C29.3159 73.784 29.4719 73.352 29.7959 72.992C30.1199 72.644 30.5279 72.464 31.0199 72.464C31.4999 72.464 31.9079 72.644 32.2439 72.992C32.5679 73.352 32.7359 73.784 32.7359 74.312C32.7359 74.84 32.5679 75.272 32.2439 75.62C31.9079 75.98 31.4999 76.148 31.0199 76.148C30.5279 76.148 30.1199 75.98 29.7959 75.62C29.4719 75.272 29.3159 74.84 29.3159 74.312ZM40.4637 77V71.612H39.3717V73.76H36.7077V71.612H35.6157V77H36.7077V74.696H39.3717V77H40.4637ZM46.2665 75.56C46.0385 75.776 45.7985 75.932 45.5465 76.028C45.2945 76.124 45.0185 76.172 44.7305 76.172C44.3225 76.172 43.9625 76.04 43.6505 75.776C43.3385 75.512 43.1345 75.176 43.0505 74.756H47.2745C47.2745 74.684 47.2865 74.612 47.2985 74.54C47.2985 74.468 47.3105 74.384 47.3105 74.312C47.3105 73.52 47.0465 72.86 46.5305 72.308C46.0025 71.768 45.3665 71.492 44.6225 71.492C43.8665 71.492 43.2305 71.768 42.7145 72.308C42.1865 72.86 41.9345 73.52 41.9345 74.312C41.9345 75.104 42.1985 75.764 42.7505 76.304C43.2905 76.856 43.9505 77.12 44.7425 77.12C45.1625 77.12 45.5585 77.06 45.9185 76.916C46.2785 76.772 46.6025 76.568 46.9145 76.28L46.2665 75.56ZM44.6225 72.44C44.9945 72.44 45.3305 72.572 45.6305 72.824C45.9185 73.088 46.1105 73.412 46.2065 73.82H43.0625C43.1465 73.412 43.3385 73.088 43.6265 72.824C43.9145 72.572 44.2385 72.44 44.6225 72.44ZM54.2138 74.3C54.2138 73.508 53.9618 72.836 53.4578 72.296C52.9538 71.768 52.3298 71.492 51.5858 71.492C51.2138 71.492 50.8778 71.576 50.5658 71.732C50.2538 71.888 49.9778 72.104 49.7618 72.392L49.6298 71.612H48.6938V79.4H49.7858V76.256C50.0018 76.544 50.2658 76.76 50.5778 76.904C50.8898 77.048 51.2258 77.12 51.5858 77.12C52.3298 77.12 52.9538 76.856 53.4578 76.316C53.9618 75.788 54.2138 75.116 54.2138 74.3ZM51.4178 72.464C51.8978 72.464 52.3058 72.644 52.6298 72.992C52.9538 73.352 53.1218 73.784 53.1218 74.3C53.1218 74.828 52.9538 75.272 52.6298 75.62C52.3058 75.98 51.8978 76.148 51.4178 76.148C50.9258 76.148 50.5178 75.98 50.1938 75.62C49.8578 75.272 49.7018 74.828 49.7018 74.3C49.7018 73.784 49.8578 73.352 50.1938 72.992C50.5178 72.644 50.9258 72.464 51.4178 72.464Z" fill="#7E839C" />
                        <circle cx="34" cy="29" r="28.25" fill="#FF7431" stroke="#FF7431" strokeWidth="1.5" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M23.75 18.5C23.6119 18.5 23.5 18.6119 23.5 18.75V22.4439C23.5 22.8581 23.1642 23.1939 22.75 23.1939C22.3358 23.1939 22 22.8581 22 22.4439V18.75C22 17.7835 22.7835 17 23.75 17H27.4439C27.8581 17 28.1939 17.3358 28.1939 17.75C28.1939 18.1642 27.8581 18.5 27.4439 18.5H23.75ZM28.0051 25.6378V23.0051H30.6378V25.6378H28.0051ZM26.5051 22.5051C26.5051 21.9528 26.9528 21.5051 27.5051 21.5051H31.1378C31.69 21.5051 32.1378 21.9528 32.1378 22.5051V26.1378C32.1378 26.69 31.69 27.1378 31.1378 27.1378H27.5051C26.9528 27.1378 26.5051 26.69 26.5051 26.1378V22.5051ZM36.4541 25.6378V23.0051H39.0867V25.6378H36.4541ZM34.9541 22.5051C34.9541 21.9528 35.4018 21.5051 35.9541 21.5051H39.5867C40.139 21.5051 40.5867 21.9528 40.5867 22.5051V26.1378C40.5867 26.69 40.139 27.1378 39.5867 27.1378H35.9541C35.4018 27.1378 34.9541 26.69 34.9541 26.1378V22.5051ZM36.4541 31.4541V34.0867H39.0867V31.4541H36.4541ZM35.9541 29.9541C35.4018 29.9541 34.9541 30.4018 34.9541 30.9541V34.5867C34.9541 35.139 35.4018 35.5867 35.9541 35.5867H39.5867C40.139 35.5867 40.5867 35.139 40.5867 34.5867V30.9541C40.5867 30.4018 40.139 29.9541 39.5867 29.9541H35.9541ZM28.0051 34.0867V31.4541H30.6378V34.0867H28.0051ZM26.5051 30.9541C26.5051 30.4018 26.9528 29.9541 27.5051 29.9541H31.1378C31.69 29.9541 32.1378 30.4018 32.1378 30.9541V34.5867C32.1378 35.139 31.69 35.5867 31.1378 35.5867H27.5051C26.9528 35.5867 26.5051 35.139 26.5051 34.5867V30.9541ZM43.3418 38.5918C43.4799 38.5918 43.5918 38.4799 43.5918 38.3418V34.648C43.5918 34.2337 43.9276 33.898 44.3418 33.898C44.756 33.898 45.0918 34.2337 45.0918 34.648V38.3418C45.0918 39.3083 44.3083 40.0918 43.3418 40.0918H39.648C39.2337 40.0918 38.898 39.756 38.898 39.3418C38.898 38.9276 39.2337 38.5918 39.648 38.5918H43.3418ZM23.5 38.3418C23.5 38.4799 23.6119 38.5918 23.75 38.5918H27.4439C27.8581 38.5918 28.1939 38.9276 28.1939 39.3418C28.1939 39.756 27.8581 40.0918 27.4439 40.0918H23.75C22.7835 40.0918 22 39.3083 22 38.3418V34.648C22 34.2337 22.3358 33.898 22.75 33.898C23.1642 33.898 23.5 34.2337 23.5 34.648L23.5 38.3418ZM43.5918 18.75C43.5918 18.6119 43.4799 18.5 43.3418 18.5H39.648C39.2337 18.5 38.898 18.1642 38.898 17.75C38.898 17.3358 39.2337 17 39.648 17H43.3418C44.3083 17 45.0918 17.7835 45.0918 18.75V22.4439C45.0918 22.8581 44.756 23.1939 44.3418 23.1939C43.9276 23.1939 43.5918 22.8581 43.5918 22.4439V18.75Z" fill="white" />
                    </svg>
                </a>
                <a className={s.footer__a} href="#">
                    <svg onClick={() => setActiveIndex(2)} width="69" height="45" viewBox="0 0 69 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.1592 42V34.788H16.3472V42H17.4872V33.78H11.0192V42H12.1592ZM21.9925 36.492C21.1885 36.492 20.5165 36.768 19.9885 37.296C19.4605 37.836 19.1965 38.508 19.1965 39.312C19.1965 40.128 19.4605 40.8 19.9885 41.328C20.5165 41.856 21.1885 42.12 21.9925 42.12C22.7845 42.12 23.4565 41.856 23.9845 41.328C24.5125 40.8 24.7885 40.128 24.7885 39.312C24.7885 38.508 24.5125 37.836 23.9845 37.296C23.4565 36.768 22.7845 36.492 21.9925 36.492ZM21.9925 37.464C22.4725 37.464 22.8805 37.644 23.2045 37.992C23.5285 38.352 23.6965 38.784 23.6965 39.312C23.6965 39.84 23.5285 40.284 23.2045 40.632C22.8805 40.98 22.4725 41.148 21.9925 41.148C21.5005 41.148 21.0925 40.98 20.7685 40.62C20.4445 40.272 20.2885 39.84 20.2885 39.312C20.2885 38.784 20.4445 38.352 20.7685 37.992C21.0925 37.644 21.5005 37.464 21.9925 37.464ZM31.8279 43.752V41.112H31.2159L29.2479 36.612H28.0959L26.1519 41.112H25.5279V43.752H26.5359V42H30.8199V43.752H31.8279ZM28.6479 37.728L30.0759 41.112H27.2439L28.6479 37.728ZM38.0876 42V36.612H37.1516L37.0196 37.392C36.7916 37.104 36.5276 36.888 36.2156 36.732C35.9036 36.576 35.5556 36.492 35.1956 36.492C34.4396 36.492 33.8156 36.768 33.3116 37.296C32.8076 37.836 32.5676 38.508 32.5676 39.312C32.5676 40.116 32.8076 40.788 33.3116 41.316C33.8156 41.856 34.4396 42.12 35.1956 42.12C35.5556 42.12 35.9036 42.048 36.2156 41.892C36.5276 41.736 36.7916 41.508 37.0196 41.22L37.1516 42H38.0876ZM33.6596 39.312C33.6596 38.784 33.8156 38.352 34.1396 37.992C34.4636 37.644 34.8716 37.464 35.3636 37.464C35.8436 37.464 36.2516 37.644 36.5876 37.992C36.9116 38.352 37.0796 38.784 37.0796 39.312C37.0796 39.84 36.9116 40.272 36.5876 40.62C36.2516 40.98 35.8436 41.148 35.3636 41.148C34.8716 41.148 34.4636 40.98 34.1396 40.62C33.8156 40.272 33.6596 39.84 33.6596 39.312ZM45.4794 39.3C45.4794 38.508 45.2274 37.836 44.7234 37.296C44.2194 36.768 43.5954 36.492 42.8514 36.492C42.4794 36.492 42.1434 36.576 41.8314 36.732C41.5194 36.888 41.2434 37.104 41.0274 37.392L40.8954 36.612H39.9594V44.4H41.0514V41.256C41.2674 41.544 41.5314 41.76 41.8434 41.904C42.1554 42.048 42.4914 42.12 42.8514 42.12C43.5954 42.12 44.2194 41.856 44.7234 41.316C45.2274 40.788 45.4794 40.116 45.4794 39.3ZM42.6834 37.464C43.1634 37.464 43.5714 37.644 43.8954 37.992C44.2194 38.352 44.3874 38.784 44.3874 39.3C44.3874 39.828 44.2194 40.272 43.8954 40.62C43.5714 40.98 43.1634 41.148 42.6834 41.148C42.1914 41.148 41.7834 40.98 41.4594 40.62C41.1234 40.272 40.9674 39.828 40.9674 39.3C40.9674 38.784 41.1234 38.352 41.4594 37.992C41.7834 37.644 42.1914 37.464 42.6834 37.464ZM48.4913 39.66C48.6113 39.66 48.7313 39.66 48.8513 39.648C48.9713 39.636 49.0793 39.612 49.1992 39.588L50.8913 42H52.1992L50.1113 39.108C50.2793 38.964 50.4473 38.784 50.6273 38.556C50.7953 38.34 50.9993 38.052 51.2153 37.704L51.9473 36.612H50.7713L50.0393 37.704C49.7993 38.064 49.5592 38.328 49.3193 38.472C49.0793 38.628 48.8033 38.7 48.4913 38.7H48.0593V36.612H46.9673V42H48.0593V39.66H48.4913ZM58.202 42V36.612H57.182L54.374 40.5V36.612H53.354V42H54.374L57.182 38.112V42H58.202Z" fill={activeIndex === 2 ? '#252424' : '#7E839C'} />
                        <path d="M34.8358 4.99996C35.021 4.25782 34.9053 3.38466 34.4511 2.59805C33.6227 1.16317 31.9818 0.559619 30.786 1.24997C29.7421 1.85269 29.3826 3.54871 29.8594 4.92446" stroke={activeIndex === 2 ? '#252424' : '#7E839C'} strokeWidth="1.5" />
                        <path d="M35.1642 4.99996C34.979 4.25782 35.0947 3.38466 35.5489 2.59805C36.3773 1.16317 38.0182 0.559619 39.214 1.24997C40.2579 1.85269 40.6174 3.54871 40.1406 4.92446" stroke={activeIndex === 2 ? '#252424' : '#7E839C'} strokeWidth="1.5" />
                        <path d="M35 5V22.5" stroke={activeIndex === 2 ? '#252424' : '#7E839C'} strokeWidth="1.5" />
                        <path d="M25.5 12H44.5" stroke={activeIndex === 2 ? '#252424' : '#7E839C'} strokeWidth="1.5" />
                        <path d="M44 5H26C25.4477 5 25 5.44772 25 6V11.5C25 11.7761 25.2239 12 25.5 12C25.7761 12 26 12.2239 26 12.5V22C26 22.5523 26.4477 23 27 23H43C43.5523 23 44 22.5523 44 22V12.5C44 12.2239 44.2239 12 44.5 12C44.7761 12 45 11.7761 45 11.5V6C45 5.44772 44.5523 5 44 5Z" stroke={activeIndex === 2 ? '#252424' : '#7E839C'} strokeWidth="1.5" />
                    </svg>
                </a>
                <a className={s.footer__a} href="#">
                    <svg onClick={() => setActiveIndex(3)} width="68" height="46" viewBox="0 0 68 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.4906 43L15.1546 34.78H14.0506L10.7026 43H11.8426L12.6706 40.912H16.4746L17.3146 43H18.4906ZM14.5786 36.16L16.0786 39.904H13.0786L14.5786 36.16ZM21.1729 40.66C21.2929 40.66 21.4129 40.66 21.5329 40.648C21.6529 40.636 21.7609 40.612 21.8809 40.588L23.5729 43H24.8809L22.7929 40.108C22.9609 39.964 23.1289 39.784 23.3089 39.556C23.4769 39.34 23.6809 39.052 23.8969 38.704L24.6289 37.612H23.4529L22.7209 38.704C22.4809 39.064 22.2409 39.328 22.0009 39.472C21.7609 39.628 21.4849 39.7 21.1729 39.7H20.7409V37.612H19.6489V43H20.7409V40.66H21.1729ZM27.5596 40.66C27.6796 40.66 27.7996 40.66 27.9196 40.648C28.0396 40.636 28.1476 40.612 28.2676 40.588L29.9596 43H31.2676L29.1796 40.108C29.3476 39.964 29.5156 39.784 29.6956 39.556C29.8636 39.34 30.0676 39.052 30.2836 38.704L31.0156 37.612H29.8396L29.1076 38.704C28.8676 39.064 28.6276 39.328 28.3876 39.472C28.1476 39.628 27.8716 39.7 27.5596 39.7H27.1276V37.612H26.0356V43H27.1276V40.66H27.5596ZM37.5583 43V37.612H36.6223L36.4903 38.392C36.2623 38.104 35.9983 37.888 35.6863 37.732C35.3743 37.576 35.0263 37.492 34.6663 37.492C33.9103 37.492 33.2863 37.768 32.7823 38.296C32.2783 38.836 32.0383 39.508 32.0383 40.312C32.0383 41.116 32.2783 41.788 32.7823 42.316C33.2863 42.856 33.9103 43.12 34.6663 43.12C35.0263 43.12 35.3743 43.048 35.6863 42.892C35.9983 42.736 36.2623 42.508 36.4903 42.22L36.6223 43H37.5583ZM33.1303 40.312C33.1303 39.784 33.2863 39.352 33.6103 38.992C33.9343 38.644 34.3423 38.464 34.8343 38.464C35.3143 38.464 35.7223 38.644 36.0583 38.992C36.3823 39.352 36.5503 39.784 36.5503 40.312C36.5503 40.84 36.3823 41.272 36.0583 41.62C35.7223 41.98 35.3143 42.148 34.8343 42.148C34.3423 42.148 33.9343 41.98 33.6103 41.62C33.2863 41.272 33.1303 40.84 33.1303 40.312ZM44.5301 42.928C44.5301 42.688 44.4941 42.436 44.4461 42.184C44.3981 41.932 44.3141 41.704 44.2181 41.488L44.1221 41.284V37.612H43.0181V41.188C42.8261 41.5 42.5981 41.728 42.3461 41.884C42.0941 42.052 41.8301 42.124 41.5661 42.124C41.1821 42.124 40.8941 42.004 40.6901 41.764C40.4741 41.524 40.3781 41.176 40.3781 40.732V37.612H39.2861V40.864C39.2861 41.584 39.4541 42.136 39.8141 42.532C40.1621 42.928 40.6541 43.12 41.2901 43.12C41.6741 43.12 42.0461 43.012 42.3941 42.796C42.7421 42.58 43.0301 42.292 43.2461 41.908C43.3181 42.076 43.3661 42.232 43.4021 42.388C43.4261 42.544 43.4501 42.7 43.4501 42.868C43.4501 43.372 43.2701 43.78 42.9221 44.092C42.5621 44.404 42.1181 44.56 41.5661 44.56C41.2061 44.56 40.8581 44.5 40.5221 44.38C40.1861 44.26 39.8621 44.08 39.5501 43.828L39.0221 44.644C39.3821 44.932 39.7901 45.16 40.2461 45.304C40.6901 45.448 41.1581 45.52 41.6501 45.52C42.4661 45.52 43.1501 45.28 43.7021 44.788C44.2541 44.308 44.5301 43.684 44.5301 42.928ZM50.8992 43V37.612H49.8072V39.76H47.1432V37.612H46.0512V43H47.1432V40.696H49.8072V43H50.8992ZM54.1341 38.548V43H55.2261V38.548H57.2181V37.612H52.1421V38.548H54.1341Z" fill={activeIndex === 3 ? '#252424' : '#7E839C'}/>
                        <path d="M45.5707 24V21.4445C45.5707 18.6217 43.0444 16.3334 39.928 16.3334H28.6427C25.5263 16.3334 23 18.6217 23 21.4445V24" stroke={activeIndex === 3 ? '#252424' : '#7E839C'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M34.2854 11.2222C37.4017 11.2222 39.928 8.9339 39.928 6.11111C39.928 3.28832 37.4017 1 34.2854 1C31.169 1 28.6427 3.28832 28.6427 6.11111C28.6427 8.9339 31.169 11.2222 34.2854 11.2222Z" stroke={activeIndex === 3 ? '#252424' : '#7E839C'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default Footer;