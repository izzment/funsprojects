import calendar from "../../../img/sidebar icons/calendar.png";
import company from "../../../img/sidebar icons/company.png";
import faq from "../../../img/sidebar icons/faq.png";
import files from "../../../img/sidebar icons/files.png";
import home from "../../../img/sidebar icons/home.png";
import services from "../../../img/sidebar icons/services.png";
import tasks from "../../../img/sidebar icons/tasks.png";

import darkcalendar from "../../../img/dark sidebar icons/calendar.png";
import darkcompany from "../../../img/dark sidebar icons/companies.png";
import darkfaq from "../../../img/dark sidebar icons/faq.png";
import darkfiles from "../../../img/dark sidebar icons/files.png";
import darkhome from "../../../img/dark sidebar icons/home.png";
import darkservices from "../../../img/dark sidebar icons/services.png";
import darktasks from "../../../img/dark sidebar icons/tasks.png";



export const SidebarContext = [
    {icon: services, darkicon: darkservices, title: "Services", href: '/',},
    {icon: home, darkicon: darkhome, title: "Home", href: '/home',},
    {icon: calendar, darkicon: darkcalendar, title: "Calendar", href: '/calendar',},
    {icon: files, darkicon: darkfiles, title: "Files", href: '/files',},
    {icon: company, darkicon: darkcompany, title: "Companies", href: '/companies',},
    {icon: tasks, darkicon: darktasks, title: "Tasks", href: '/tasks',},
    {icon: faq, darkicon: darkfaq, title: "FAQs", href: '/frequently-asked-questions'},
]
