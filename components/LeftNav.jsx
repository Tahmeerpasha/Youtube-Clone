'use client'
import { categories } from '@/utils/constants'
import React, { useContext, useEffect } from 'react'
import LeftNavMenuItem from './LeftNavMenuItem'
import { Context } from '@/context/contextApi'
import { useRouter } from 'next/navigation'

const LeftNav = () => {
    const { selectedCategories, setselectedCategories, mobileMenu } = useContext(Context);
    const navigate = useRouter();
    const clickHandler = (name, type) => {
        switch (type) {
            case "category": return setselectedCategories(name);
            case "home": return setselectedCategories(name);
            case "menu": return false;
        }
    }

    return (
        <div className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all ${mobileMenu ? "translate-x-0" : ""
            }`} >
            <div className="flex px-5 flex-col">
                {categories.map((category) => {
                    return (
                        <React.Fragment key={category.name}>
                            <LeftNavMenuItem
                                text={category.type === 'home' ? "Home" : category.name}
                                icon={category.icon}
                                action={() => { clickHandler(category.name, category.type); navigate.push('/'); }}
                                className={`${selectedCategories === category.name ? 'bg-white/[0.25]' : ""}`}
                            />
                            {category.divider && <hr className="bg-white/[0.2] my-5" />}
                        </React.Fragment>)
                })}
                <hr className="bg-white/[0.2] my-5" />
                <div className="text-white/[0.5] text-[12px]">Cloned By Tahmeer Pasha</div>
            </div>
        </div >
    )
}

export default LeftNav