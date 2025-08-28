import React from "react";

function Footer () {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth= currentDate.getMonth();
    const currentMonthName = currentDate.toLocaleDateString('default', {month: 'long'})
    return (
        <footer>{currentMonthName} {currentYear.toString()}</footer>
    )
}

export default Footer;