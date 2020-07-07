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
      main_subtitle: "Frontend-разработчик",

      about_title: "Обо мне",
      about_info_1: "Меня зовут Юля :)",
      about_info_2: "С 2018 года я занимаюсь frontend-разработкой: участвовала как в коммерческих, так и некоммерческих проектах. В большинстве из них проявляла себя не только в качестве непосредственного разработчика, но и как проектировщика и дизайнера. Также организовывала работу других участников команды и занималась написанием технических требований и продвижением проектов.",
      about_info_3: "Быстро адаптируюсь к новой команде. Сейчас проявляю высокий интерес к смежным областям: аналитика, PR. Опыт разработки станет полезным навыком для их освоения.",
      about_skills_title: "Skills",

      projects_title: "Мои проекты",
      projects_item1_title: "DigitalNSK",
      projects_item1_comp: "Веб-студия SibTiger",
      projects_item1_subtitle: "frontend-разработка (Vue.JS)",
      projects_item2_title: "Novosib-мебель",
      projects_item2_comp: "Веб-студия SibTiger",
      projects_item2_subtitle: "верстка (html/css)",
      projects_item3_title: "Янтарь",
      projects_item3_comp: "Веб-студия SibTiger",
      projects_item3_subtitle: "frontend-разработка (Vue.JS)",
      projects_item4_title: "Сайт-визитка для Simulatos",
      projects_item4_subtitle: "frontend-разработка (Vue.JS), дизайн, поддержка",
      projects_item5_title: "Личный кабинет студента НГТУ-НЭТИ",
      projects_item5_subtitle: "frontend-разработка (Vue.JS), дизайн, поддержка",

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
      main_subtitle: "Junior frontend-developer",

      about_title: "About me",
      about_info_1: "I'm Julia :)",
      about_info_2: "Since 2018, I have been engaged in frontend development: I participated in both commercial and non-commercial projects. In most of them, she showed herself not only as a direct developer, but also as a designer and designer. She also organized the work of other team members and was involved in writing technical requirements and promoting projects.",
      about_info_3: "I quickly adapt to the new team. Now I show high interest in related fields: analytics, PR. Development experience will be a useful skill for their development.",
      about_skills_title: "Skills",

      projects_title: "Projects",
      projects_item1_title: "DigitalNSK",
      projects_item1_comp: "Web Studio SibTiger",
      projects_item1_subtitle: "frontend development (Vue.JS)",
      projects_item2_title: "Novosib-m",
      projects_item2_comp: "Web Studio SibTiger",
      projects_item2_subtitle: "layout (html / css)",
      projects_item3_title: "Yantar",
      projects_item3_comp: "Web Studio SibTiger",
      projects_item3_subtitle: "frontend development (Vue.JS)",
      projects_item4_title: "Business Card Site for Simulatos",
      projects_item4_subtitle: "frontend development (Vue.JS), design, service",
      projects_item5_title: "Student's personal account NSTU-NETI",
      projects_item5_subtitle: "frontend development (Vue.JS), design, service",

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