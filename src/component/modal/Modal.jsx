import React from 'react';
import s from './Modal.module.css'


const menuItem = [{

}, {
    id: 0,
    title: 'Магазины',
    link: '#'
}, {
    id: 1,
    title: 'Еда',
    link: '#'
}, {
    id: 2,
    title: 'Услуги и сервисы',
    link: '#'
}, {
    id: 3,
    title: 'Развлечения',
    link: '#'
},{
    id: 4,
    title: 'Новости',
    link: '#'
},
]


const Modal = ({ closeMenu }) => {
    return (
        <div className={s.conteiner__menu}>
            <div className={s.navbar}>
                <img width='80px' height='55px' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAA3CAYAAACb4M1PAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAo+SURBVHgB7VtPUhvHF+6WRi4vXGWB83N+O4tCJN6FnMDiBMInQJzA+ASGE2BOIHGCwAki75KV8c5lRDHsko0jdpSRZvJ9Pa+H1jB/NBKhQkVflWBmul/39Jv3+v3pbq3uCc1ms6WVeheEoV/Rev10MPjZLV9bW+sGQaC01o0wDHtnZ2eH6gGgou4Jnuf5oVInYMw2/h+Robbs5cuXDQXmsQwMPMTPVw8EWt0jfmg2f/k2Gm37vj8EA9/pMGyEWg/xFRv2Oet8GQxeqwVug1K31mzu2/tGo1Hnz96Deburq6tb6gHhXiWQAIM2oaKvcHk8GAz6fCbzYxsToH96enqgHhDunYEE57zxeNyCsWjjN+ScNxqNDqjCaoEFFljg/qDhwL7BPFS/VQD3As8/2Yk+C8YAwPnl9fX19VHWPGbnPanXRz0/qxw4gTE5yXteRIdxrXOOlbEcp9Fh3rUW/4M7TssT8iDNqKG8g/IXvPZgRXbwv5GspMLQWJi11VX/ejzeSA7YAlFFF40ZejjLbHQvrZ4ZZBh2eV2tVjv457vlwXj8q5J24Gjvkhm8xiAbeI9u8nka3fVotOIUreuoPnz0wE+j0zJuabdvy2KeRHS3vYIw3EKdlhm/KgKkq+Z5H+GvNZJFdEks85yOS+PHZnPHbWdaiCQ0eE0mZH3ku+ovDS4Dh7pS6bg/dfPV6pCu/SQxRDzp9NbdEG0aUJUCxMiqJEinLR3ia6jg3j/ZXxa8+Ar+2JcvXyYCeAjdMaTvHJd1K7Lui4xHo01eo+wojMrrMqi+mhJQbdavq5IwdCJFgajq1HQz9JeFXBUWgxBLoVvmTMAcwHv868ltyw3P8kAVBBM6qgTYNkO+mK5E5ibR35047bkMNFkSK3lQkwlCrTv2OdTnAyTw2JZB3d+oAkyoIKF1r4iGRgEa8VfoqC4M3NSq6/YXRh+9oEPdQOweJn/K0UbPqVyHxe269FZFTYfOAF3jYdWHbgAa77NxMSa5A3NVkFKEtzoEXUeVAd5ZTSlJ4+vrHSXuFvvzarVDjG9XzQnPua4rK1VJ4EuPxuPYnFcqlTbdHAKG5MJaaDzpy1xpjEmWD2n8xhsVNFIEqW2oAjBmDkQTbD+1apXGbbuAroF/b9z+qrWamgZhynyOvteVTGlFbsyQ7gE6/Nk6yEatnXkLjf1KQ8OfdiZznWPp3HpBCfcDzOvho2xg/n0dJ13x0Yss/6z9yfS0kfwpx6d0rbA/CoLWJH14mYwsHK+/CMaY5GVY+HVnSd1LQnabH4/3OnLQV4roZu0vD64Kq/Pz84siAkqWUV4wPEyZ+HUk2sahFmOSORdCknJVLw+cHmCN6T5tcm5jhrvIF5ynvyx4ZSpTVVzjcTYYpH5NGBPOEbnGpEzkkIWK572FIWipyP/cgcQfZrV5F/2lvkOZym7kAVX+kFPxSK7SI5MSkUMePn/+zIUq204d83A3teId9ZcGLxCDgNDtsqgylxvxrwdGXuZ9TWRbDqG+ZqLFfzMtIIHQH0XSomDRPyVpUHaCui2XJu+5BRjzHh/pY/J5UX9XV1fDrHYLeaL1W/DiqVpggQUW+I9DM65FaDZV9gTp7Z57T0e5VqttFtGlpfBdmCyJMkbKL1pCsH1KSt3Gwh+K6IqWBmaFV61U9ktkZ3vuzePHj+vww7pFRGkpfAtJMZk24MsNwaCVrOiFaayQMS3XK5LtIJFxHW0P8dNoJXnRkds+fhvqDjDX5iK81PyJSawvOHeUrtStHdy9JWmsrD5bmX6gipMPcd2ymfMs5Kb0zS9np1RiNW+Cfpr83kS+8abRzYy+DuXCR9s7kLYl/nDN8MxKbGtlZeVFktZdO3HQVneA3JS+6bzZ7Ki0VbskEvR4aWpZJ49E0usRyPBIxVppqTDec75mBOSfnbkq3kP9tmZMnP1uW/KfzPdVFGZ2MF3szbud5O72B2INVZWEVStmSWBo3jpFqdKBTMpxcsBkNjdsmhswKJkQSUh5H1GGzURnThdlcGcMDEuuMUwsSSJEFMb0eS/SkTrXkSE/rK2d8wft+IspLWlniEzvrX2FrpQzkSoxfPSuGdNFGczFwLQdDSWIY7WyObqJxECOdJBhwrS4f5HiWx/RlXI/wtBZD2lxB4OaA6XSWUkY/1FS+2Fi0SkPsiTaMnRan9glAQT/PiwpmVAX6bi1K4BJALhFPV7DwNWpvmQm50Ck99fRVJw9TxiPfrz0EIafQGvfm9PFzD7hXAykM2v9sTL7ml21MgP3vDRVSjUmwpyJxKjsejWLRiK5B/KCW04/XNHbTXYiecSZ9ybOpcIJ36qvpoROui7ZmDAmYOhOWiV3STUIAqOSqS5SOuqQ6FdqRswsgeKItuw91O/TNHSJ/SxH3KGarIPoqCVqGbsaEoW8Q78c7IGVTDOHhWG87cRqgivlQZTHvAWoPyWf0wA/zLGaATMxECrDxZxW/ODGihbDMR6Ds7PU3fiyZ5p9GGPCVL1iNjzaMcZBb+IdbHsu6RAf0hgkSjlLZCFpO6MfX1bsjDGZJT6e340puTtAOT5ZVj2RrtjV4MepVKsbudFN5CSbbXhJFymLhPsGb8jDmSITbxwEO5gD6hD5VAmiawFr20t7xn13kKLUtRGm1FHe4fX42zdTh7Gz7PpS3+RZFtDHa/RhwjL6hFz/wOU2PgJ9ubad67gJEvVO0N6xjVDoEVSkn7OU6MqCEsfohuMPMsa/wAILLLDAA0Ly/Ny/Hfd23HVacD8NfL999UDAcyJd2P11+AMnzMnR51pbXX2PTMFTugP2DJuJNxG8y8LPniQEukxQgo7Rgs/d72OlXmlEF/QNxSfjmYsW+mJbe/aoq91qIYtaPGR4guf7eP7WPNP61Smuky/M9tDOEfN+th17mFuSpQdsi5tFT+FAy2JSm+c9JGZet++MNR1uIu1yLQZJjb2ZHGkQbYOBXKUy53XphAZKfTTPsdoVb9cF8+SZsmlzevlC53PQgdYhBvS6WqvtWTpJeR3oaDepxbrNjDCjY7dJaEmP8TRnkJEqc1Nobpqeh7nJlJgJSCwQPGdiacwHiU6ExotPHAOZF06uzUzPwJQXfAEntc9r7ktRTs6NX5COa9o2ODJCDrQocXobTnGbJ9LdtqCmbQkJJ8CYl1KvSoK7RvHRtpzzLDyawQMx7QK6Fv69maVP4lYszPDGq1R2oRaHkIhNRA7xSleaSlnwmNcjrIqB7pJ0kKAjW4aPwq2/G3KSyZdnzMkxmnjq9F0PTMbKSHRWV/xY6+hnRRubIwYnCuXc6GZopxr3REESlMDB6elUoWgaqvzz7LvvLr5+/foHr/n/+fffM7PyExr/DeL+O58vLy9fosy3hE+ePGG49qelGw6HV/97/vx3S8f1C9P2s2eXGHCDz7ibn8+WlpauQPt/MP3g0aNHFwjDLkE/XFpe/nMgew5J5/ZnYduTKaGO6z+YCfJqtcd8hvnugm3hfX3QXyTf0x1Hsuw/B0pX2hG0+8TfUYZdP7uJC9sAAAAASUVORK5CYII=' alt="iconBlack" />
                <img onClick={closeMenu} width='18px' height='18px' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADGSURBVHgBrZTLDcMgDIZtQ6WconQDjozRjJLJMkJHSLsFR0bovVAKUSP1EdVG4j+C/eEXVtZacxyGc9/311sWVOjdl2IIcz47HZRaTFYN5BHjsvpqPZPSekJED4hGCtsgKSUDKfl7CBPuXsQ4+iwR5GWLnIEEUu5Qasg9hJLQu64DLlqU1AGJgKvfLugHVsQ0gaCRiI2mpCaYM+IgJR1SauRg7dvfZCCbfJEayN86ljVSAylyzvmPBmxrJAFcpJBv2Oqb18gTWdKX4H4Z3VoAAAAASUVORK5CYII=' alt="close" />
            </div>
            <div className={s.content__menu}>
                {
                    menuItem.map((menu) =>
                        <a key={menu.id} href={menu.link}>
                            <h4 onClick={closeMenu}>{menu.title}</h4>
                        </a>
                    )
                }
            </div>
        </div>
    );
};

export default Modal;