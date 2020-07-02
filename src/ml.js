import Vue from 'vue'
import { MLInstaller, MLCreate, MLanguage } from 'vue-multilanguage'

Vue.use(MLInstaller)

export default new MLCreate({
  initial: 'RU',
  save: process.env.NODE_ENV === 'production',
  languages: [
    new MLanguage('RU').create({
      header_link_1: "Обо мне",
      header_link_2: "Проекты",
      header_link_3: "Образование",
      header_link_4: "Контакты",

      main_name: "Шибалова Юлия",
      main_subtitle: "Frontend-разработчик / Аналитик",

      about_title: "Обо мне",
      projects_title: "Мои проекты",

      education_title: "Образование",
      education_nstu_title: "Новосибирский государственный технический университет НЭТИ, 2017 – 2020",
      education_nstu_fac: "Факультет прикладной математики и информатики",
      education_nstu_direction: "02.03.03 Математическое обеспечение и администрирование информационных систем",
      education_nstu_mark: "Средний балл – 4,78",
      education_osu_title: "Орловский государственный университет им. И.С. Тургенева, 2016 – 2017",
      education_osu_fac: "Физико-математический факультет",
      education_osu_direction: "01.03.01 Прикладная математика",
      education_osu_mark: "Средний балл – 5,0",
      education_add_title: "Дополнительное образование",
      education_add_item_1: " Курс по верстке от erodionov.ru (2018)",
      education_add_item_2: " Курс по React.js от erodionov.ru (2019)",

      contact_button: "Отправить",
      contact_title: "Свяжитесь cо мной",


      main_button: "Скачать резюме"
    }),
    new MLanguage('EN').create({
      header_link_1: "About me",
      header_link_2: "Projects",
      header_link_3: "Education",
      header_link_4: "Contacts",

      main_name: "Shibalova Julia",
      main_subtitle: "Frontend-developer / Analyst",

      about_title: "About me",
      projects_title: "Projects",

      education_title: "Education",
      education_nstu_title: "Novosibirsk state technical university NETI, 2017 – 2020",
      education_nstu_fac: "Faculty of Applied Mathematics and Computer Science",
      education_nstu_direction: "02.03.03 Software and administration of information systems",
      education_nstu_mark: "Average mark – 4,78",
      education_osu_title: "Orel state university named after I.S. Turgenev, 2016 – 2017",
      education_osu_fac: "Faculty of Physics and Mathematics",
      education_osu_direction: "01.03.01 Applied Mathematics",
      education_osu_mark: "Average mark – 5,0",
      education_add_title: "Additional education",
      education_add_item_1: "Layout course from erodionov.ru (2018)",
      education_add_item_2: "React.js course from erodionov.ru (2019)",


      contact_button: "Sent",
      contact_title: "Contact me",

      main_button: "Download resume"

     
    })
  ],
  middleware: (component, path) => {
    // you can mutate path here
    // you should return path updated
    return path
  },
  gettingStrategy: 'default'
})