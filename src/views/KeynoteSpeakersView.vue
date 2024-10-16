<template>
  <div class="keynote-speakers">
    <!-- 主标题 -->
    <h1 class="title1 font-merri">Keynote Speakers</h1>

    <!-- 遍历speakers数组，为每个演讲者创建一个部分 -->
    <div v-for="(speaker, index) in speakers" :key="index" class="speaker-section">
      <div class="speaker-content">
        <!-- 演讲者照片 -->
        <div class="speaker-photo">
          <img :src="getImageUrl(speaker.photo)" :alt="speaker.name" />
        </div>
        <!-- 演讲者信息 -->
        <div class="speaker-info">
          <h2 class="speaker-name">{{ speaker.name }}</h2>
          <!-- <p><span class="bold">Title:</span> {{ speaker.title }}</p> -->
          <p><span class="bold">Keynotes:</span> {{ speaker.keynote }}</p>
          <p>
            <span class="bold">Abstract:</span> <span class="italic">{{ speaker.abstract }}</span>
          </p>
        </div>
      </div>
      <!-- 演讲者简历 -->
      <div class="speaker-bio">
        <p><span class="bold">Bio:</span> {{ speaker.bio }}</p>
      </div>
      <!-- 如果不是最后一个演讲者，添加分隔线 -->
      <el-divider v-if="index < speakers.length - 1" />
    </div>
    <h1 class="title1 font-merri">Topic Speakers</h1>
    <!-- 遍历speakers数组，为每个演讲者创建一个部分 -->
    <div v-for="(speaker, index) in speechs" :key="index" class="speaker-section">
      <div class="speaker-content">
        <!-- 演讲者照片 -->
        <div class="speaker-photo">
          <img :src="getImageUrl(speaker.photo)" :alt="speaker.name" />
        </div>
        <!-- 演讲者信息 -->
        <div class="speaker-info">
          <h2 class="speaker-name">{{ speaker.name }}</h2>
          <!-- <p><span class="bold">Title:</span> {{ speaker.title }}</p> -->
          <p><span class="bold">Speech:</span> {{ speaker.speech }}</p>
          <p>
            <span class="bold">Abstract:</span> <span class="italic">{{ speaker.abstract }}</span>
          </p>
        </div>
      </div>
      <!-- 演讲者简历 -->
      <div class="speaker-bio">
        <p><span class="bold">Bio:</span> {{ speaker.bio }}</p>
      </div>
      <!-- 如果不是最后一个演讲者，添加分隔线 -->
      <el-divider v-if="index < speechs.length - 1" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 演讲者数据数组
      speakers: [
        {
          name: 'Abdulmotaleb El Saddik',
          photo: 'Abdulmotaleb el Saddik.jpeg',
          title: 'TBD',
          keynote: 'Multimodal LLMs for Digital Twins',
          abstract: 'TBD',
          bio: 'Abdulmotaleb El Saddik (F2009), a Distinguished Professor, is an internationally recognized scholar who has made seminal contributions to the knowledge and understanding of multimedia computing, communications, and applications. His visionary work looks toward the establishment of Digital Twins using AI, AR/VR and Haptics that allow people to interact in real-time with one another as well as with their digital representation in the Metaverse. He is the Editor in Chief of the ACM Transactions on Multimedia Computing. Communications and Applications (ACM TOMM), a Senior Associate Editor of IEEE Consumer Electronics Magazine, and Guest Editor for several Transactions and Journals. He has co-authored ten books and 600+ articles and five patents and chaired more than 50 conferences and workshops. He has received research grants and contracts totaling more than $30M and has supervised more than 160 researchers. Dr. El Saddik is a Fellow of the Royal Society of Canada, IEEE, the Canadian Academy of Engineering, and the Engineering Institute of Canada. He has received several awards. including the Friedrich Wilhelm Bessel Award from the Humboldt Foundation, the IEEE Instrumentation'
        },
        
        {
          name: 'Hiroshi Maruyama',
          photo: 'tbd.png',
          title: 'TBD',
          speech: 'TBD',
          abstract: 'TBD',
          bio: 'Hiroshi Maruyama has spent 26 years in IBM Research, Tokyo Research Laboratory, working on various computer science areas such as artificial intelligence, natural language processing, machine translation, hand-writing recognition, multimedia, XML, Web Services, and security. He was the director of IBM Tokyo Research Laboratory from 2006 to 2009. From 2011 to 2016, he was a professor at the Institute of Statistical Mathematics where he worked on projects related to big data, statistics, and their impacts on society. He joined Preferred Networks, Inc. in April 2016 as the chief strategy officer. His current research interests include practical applications of machine learning, social implications of information technology and machine learning, and computer science and statistics in general. Currently he is an Executive Fellow atKao Corporation, a senior researcher at Research into Artifacts, Center for Engineering, University of Tokyo, and a senior advisor atPreferred Networks, Inc. (based on Bio on ISSRE2024 Homepage)'
        },
        {
          name: 'San Murugesan',
          photo: 'San Murugesan.jpg',
          title: 'TBD',
          keynote: 'Testing AI: Navigating Complex Challenges, Approaches, and Future Pathways',
          abstract:
            "Artificial Intelligence (AI) systems, driven by machine learning (ML), deep learning (DL), and generative AI, are rapidly transforming industries, from healthcare and finance to autonomous vehicles. However, testing these systems presents unique challenges distinct from traditional software testing needs. Ensuring AI's accuracy, fairness, and safety in mission-critical applications is more essential than ever. In this talk, we will examine the fundamental differences between testing AI and conventional software, focusing on challenges such as explainability, bias detection, and continuous learning. We will explore why popular techniques like the Turing Test fall short, discuss current testing methodologies, and the need for new approaches tailored to the complexities of AI. Finally, we will look ahead to future research directions, offering recommendations for effective AI testing practices that ensure trustworthiness, robustness, and ethical alignment in real-world scenarios.",
          bio: "Professor San Murugesan is the Director of BRITE Professional Services in Sydney, Australia, and the editor-in-chief of IEEE Intelligent Systems. He is also an adjunct professor at the School of Computing at Western Sydney University and an honorary professor at Amity University. Murugesan has an extensive background in academia and industry, having previously worked as a Senior Research Fellow at NASA Ames Research Center and held senior positions at Southern Cross University and the Indian Space Research Organization (ISRO). Murugesan's expertise covers a broad spectrum of areas in information technology, including artificial intelligence, autonomous and intelligent systems, sustainability, and cybersecurity. He has authored and co-edited several books, including 'Encyclopedia of Cloud Computing' and 'Harnessing Green IT: Principles and Practices.' Murugesan is a distinguished speaker of the ACM and IEEE and has been recognized with numerous awards, such as the IEEE Computer Society's Distinguished Service Certificate, for his significant contributions to the field. He is a Life Senior Member of IEEE and Golden Core Member of the IEEE Computer Society. In addition to his academic and research contributions, Murugesan has been actively involved in organizing conferences, delivering keynotes, and providing consultancy services. He holds a PhD from the Indian Institute of Science, an MTech from the Indian Institute of Technology Madras, and a BE (Honours) from PSG College of Technology."
        },
        {
          name: 'Shervin Shirmohammadi',
          photo: 'Shervin Shirmohammadi.png',
          title: 'TBD',
          keynote:
            'Uncertainty-Assisted Testing and Trustworthy Decision Making with Machine Learning',
          abstract:
            'As machine learning (ML) becomes more prevalent in many applications, some directly or indirectly affecting human safety, the issue of making trustworthy decisions based on ML prediction becomes important, and in some cases vital. In this talk, we will see how uncertainty can be quantified in both ML regression and ML classification, and how it can be used to increase testing efficiency and catch less-trustworthy ML predictions, leading to more accurate and trustworthy systems that can be deployed in the real world.',
          bio: 'Shervin Shirmohammadi received his Ph.D. in Electrical Engineering in 2000 from the University of Ottawa, Canada, and after spending 3 years in the industry as a senior architect and project manager, joined as Assistant Professor the same University, where since 2012 he has been a Full Professor with the School of Electrical Engineering and Computer Science. He is Director of the Discover Laboratory, doing research in machine learning-assisted measurements, especially vision-based measurement, IoT measurements, and multimedia and network measurements. The results of his research, funded by more than $28 million from public and private sectors, have led to over 400 publications, over 70 researchers trained at the postdoctoral, PhD, and Master’s levels, 30+ patents and technology transfers to the private sector, and four Best Paper awards. Dr. Shirmohammadi is an IEEE Fellow “for contributions to multimedia systems and network measurements”, and the recipient of the 2019 George S. Glinski Award for Excellence in Research, the 2021 IEEE Instrumentation and Measurement Society (IMS) Distinguished Service Award, and the 2023 IEEE IMS Technical Award ‘for contributions to the advancement of machine learning-assisted measurements’. '
        },
        {
          name: 'Fumio Machida',
          photo: 'tbd.png',
          title: 'TBD',
          speech: 'Performance and Safety Evaluation for N-version Perception Systems',
          abstract: 'N-version Machine Learning (ML) system is an architectural approach to improve the reliability of outputs from ML systems. By using diverse ML models and multiple inputs, the system can detect prediction errors and prevent the system from producing harmful outputs. However, other dependability aspects, such as performance and safety, need to be considered together in practical application system design. This talk first introduces how N-version ML systems can improve the reliability of ML systems outputs and then discusses how performance and safety are affected by redundant execution and configurations. The talk will give an example of performance and safety evaluation results for a traffic sign classification system and an object detection system for an autonomous vehicle.',
          bio: 'Fumio Machida (Senior Member, IEEE) is an associate professor with the Computer Science Department, University of Tsukuba. Before, he was a principal researcher with NEC Corporation. He was a visiting scholar with the Department of Electrical and Computer Engineering, Duke University in 2010. He was a recipient of the young scientists prize of Japan in 2014. His research interests include modeling and analysis of system dependability, software aging and rejuvenation, and reliability of machine learning systems. He is a member of the ACM.(Based ondocument publishedon 16 June 2023).'
        },
        // ... 其他演讲者数据 ...
      ],

      speechs: [
        {
          name: 'Masashi Sugiyama',
          photo: 'Masashi Sugiyama.jpg',
          title: 'TBD',
          speech: 'Theories and algorithms of machine learning',
          abstract:
            "'The safe deployment of AI systems in the real world is a pressing challenge today. From the theoretical perspective of machine learning, we address this challenge by developing reliable machine learning algorithms from imperfect information. In this talk, I first give an overview of our recent research on machine learning from weak supervision, noisy labels, and biased data. Then, I discuss how machine learning research should be further extended in the era of large foundation models",
          bio: 'The safe deployment of AI systems in the real world is a pressing challenge today. From the theoretical perspective of machine learning, we address this challenge by developing reliable machine learning algorithms from imperfect information. In this talk, I first give an overview of our recent research on machine learning from weak supervision, noisy labels, and biased data. Then, I discuss how machine learning research should be further extended in the era of large foundation models'
        },
        {
          name: 'Jianjun Zhao ',
          photo: 'Zhao jianjun.png',
          title: 'TBD',
          speech: 'Towards Reliable AI-Enabled Cyber-Physical Systems: Testing, Debugging, and Beyond',
          abstract: '',
          bio: 'Jianjun Zhao is a Professor at the Faculty of Information Science and Electrical Engineering at Kyushu University. Prior to this, he held positions at the Fukuoka Institute of Technology and Shanghai Jiao Tong University. He earned his B.S. degree from Tsinghua University and his Ph.D. from Kyushu University. His research interests lie in software engineering and programming languages, with a current focus on developing techniques to enhance the robustness, reliability, security, and maintainability of quantum software, making it easier to specify, build, and improve.'
        },
        {
          name: 'Hussein Al Osman',
          photo: 'Hussein al Osman.png',
          title: 'TBD',
          speech:
            'Leveraging LLMs in Software Testing: Current State-of-the-Art and Future Directions',
          abstract:
            'LLMs, such as GPT and Codex, have revolutionized natural language processing and artificial intelligence, but their application to software testing is still developing. This talk will highlight how LLMs are used for test case generation, program debugging, and bug fixing, with a focus on tasks such as unit test, system test, and oracle generation. The talk will address the challenges and opportunities that LLMs pose in improving traditional software testing methods, including prompt engineering and the integration of LLMs with existing testing frameworks. Finally, the talk will identify key gaps and suggest future research directions that could lead to further advances in the use of LLMs to improve software quality.',
          bio: "Dr. Hussein Al Osman is an Associate Professor at the School of Electrical Engineering and Computer Science at the University of Ottawa. He leads the Multimedia Processing and Interaction group and is a member of the Multimedia Computing and the Distributed and Collaborative Virtual Environments Research laboratories. Additionally, he is the Associate Director of the Digital Transformation and Innovation interdisciplinary program at the University of Ottawa. His research has been funded by public organizations (e.g., NSERC and MITACS) and private collaborators, resulting in over 70 peer-reviewed articles, 2 patents, and several technology transfers to Canadian and international companies. Dr. Al Osman's research focuses on the application of artificial intelligence in general and large language models in particular to various applications, including multimedia system, software engineering, and affective computing. Moreover, Dr. Al Osman conducts research in Human-Computer Interaction (HCI), leading the development of several serious games intended for physical rehabilitation and education."
        },
        {
          name: 'Fuyuki Ishikawa',
          photo: 'tbd.png',
          title: 'TBD',
          speech: 'TBD',
          abstract: 'TBD',
          bio: 'Fuyuki Ishikawa is currently an Associate Professor with Information Systems Architecture Science Research Division and a Deputy Director with GRACE Center, National Institute of Informatics, Tokyo, Japan. His research interests include dependability of advanced software systems, including testing and verification techniques for autonomous driving systems and machine learning-based systems.(Based on document publishedon 5 July 2022).'
        },
        {
          name: 'Daisuke Shimbara',
          photo: 'Daisuke Shimbara.jpg',
          title: 'TBD',
          speech: 'AI quality management and issues in Hitachi DX Engineering Research',
          abstract:
            'We have been developing quality management techniques for AI systems since 2017. However, these techniques have limited modality (image), AI paradigms (classification), and verifiable quality characteristics, which necessitate wider verification. Furthermore, laws, standards, and guidelines related to AI quality are emerging worldwide, and the industry is required to comply with them.',
          bio: 'Graduated from Tokyo Institute of Technology in 2006 with a major in Software Engineering, then joined the research division of Hitachi Ltd. Since then, engaged in the research and development of software verification for various products including TVs, recorders, car navigation systems, commercial air conditioning equipment, and medical analysis equipment. Earned a doctorate degree from Tokyo Institute of Technology in 2021.'
        },
        {
          name: 'Naoyasu Ubayashi',
          photo: 'tbd.png',
          title: 'TBD',
          speech: 'TBD',
          abstract: 'TBD',
          bio: 'Naoyasu Ubayashi is a professor in Global Center for Science and Engineering, Faculty of Science and Engineering at Waseda University. He is also a Professor Emeritus, Kyushu University. He received his PhD from The University of Tokyo. He is a member of ACM SIGSOFT, IEEE Computer Society, and Information Processing Society of Japan (IPSJ). He received "IPSJ SIG Research Award 2003" from IPSJ. (based on homepage.)'
        },
        {
          name: 'Shogo Tokui',
          photo: 'tbd.png',
          title: 'TBD',
          speech: 'TBD',
          abstract: 'TBD',
          bio: ''
        },
        {
          name: 'Ruiyuan Wan',
          photo: 'Ruiyuan Wan.png',
          title: 'TBD',
          speech: 'TBD',
          abstract: 'TBD',
          bio: 'Dr. Wan received a doctorate degree in EE from Tsinghua University in 2012 and visited UC Berkeley EECS. Since joining Huawei in 2016, she has been engaged in intelligent auxiliary test technology exploration, engineering tool implementation planning and design, and led the team to focus on LLM&ML intelligent auxiliary test design, system test code generation, and all-scenario independent test of API interfaces. In the direction of intelligent demarcation and RCA of test failures, she successfully incubated and applied multiple intelligent test services on a large scale. She won the Presidents Individual Award of 2012 Laboratories, Gold Medal Team, Presidents Award of Optical Product Line, Presidents Award of Digital Energy, Presidents Award of R&D Tools, and Outstanding Individual of Software Engineering Capability Improvement General Team. She has won Huawei Pirates Major Test Technology Breakthrough Award for multiple times. She has served as the special producer of AiDD Summit.'
        },
        {
          name: 'Shaukat Ali',
          photo: 'Shaukat Ali.jpg',
          title: 'TBD',
          speech: 'AI Foundation Models for Cyber-Physical Systems Testing',
          abstract:
            'AI foundation models, trained on vast datasets spanning multiple modalities—such as text, audio, video, and images—are increasingly being integrated into various aspects of our daily lives. Their role across diverse sectors is expected to grow significantly in the years ahead. To this end, this talk will present how we utilized these models to test industrial and real-world cyber-physical systems, including autonomous driving systems, laptop refurbishing robots, and medicine dispensing machines. We will present the methodologies employed, key results, and potential future developments. Additionally, we will discuss cases where these models fell short in supporting testing software systems, highlighting the challenges, limitations, and opportunities.',
          bio: 'Shaukat Ali focuses on devising novel methods for developing cyber-physical systems by applying various advanced techniques, such as artificial intelligence, digital twins, and quantum computing. He has led many national and European projects related to cyber-physical systems testing, search-based software engineering, model-based system engineering, and quantum software engineering. He regularly serves as a program committee member for software engineering conferences (e.g., ASE, FSE, ICSE-SEIP, ICST) and organizing committees. Additionally, he serves as an associate editor for ACM TOSEM and Springer EMSE journals and is the steering committee chair for ICST and SSBSE.'
        },
        {
          name: 'Lei Ma',
          photo: 'Lei Ma.jpg',
          title: 'TBD',
          speech: 'Towards Trustworthy Assurance of AI Systems in the LLM Era',
          abstract:
            "In recent years, deep learning-enabled systems have made remarkable progress, powering a surge in advanced intelligent applications. This growth and its real-world impact have been further amplified by the advent of large foundation models (e.g., LLM, Stable Diffusion). Yet, the rapid evolution of these AI systems often proceeds without comprehensive quality assurance and engineering support. This gap is evident in the integration of standards for quality, reliability, and safety assurance, as well as the need for mature toolchain support that provides systematic and explainable feedback of the development lifecycle. In this talk, I will present a high-level overview of our team's ongoing initiatives to lay the groundwork for Trustworthy Assurance of AI Systems and its industrial applications.",
          bio: 'Lei Ma is currently an Associate Professor with The University of Tokyo; as well as an associate professor and Canada CIFAR AI Chair with University of Alberta. His research centers around the interdisciplinary fields of human-centered trustworthy artificial intelligence (AI), software engineering (SE), and cyber-physical system (CPS) with a special focus on quality, reliability, safety, and security assurance, as well as the interpretation and human interactivity of and AI Systems. Many of his works were published in top-tier AI, software engineering, and security venues (e.g., TSE, TOSEM, ICSE, FSE, ASE, CAV, ICML, NeurIPS, AAAI, IJCAI, TDSC), among which four papers receive the ACM SIGSOFT Distinguished Paper Awards (ASE 16, ASE 18, ASE 18, FSE 23), and an annual best paper award of 2022 IEEE Transactions on Software Engineering (TSE 2022). More information about his recent activities can be found at https://www.malei.org/.'
        },
        {
          name: 'Nobukazu Yoshioka',
          photo: 'tbd.png',
          title: 'TBD',
          speech: 'TBD',
          abstract: 'TBD',
          bio: 'Nobukazu Yoshioka is the CEO of QAML Inc. and a Guest Professor of the Research Institute for Science and Engineering at Waseda University andJapan Advanced Institute of Science and Technology (JAIST),Japan. Dr. Nobukazu Yoshioka received his B.E. degreein Electronic and Information Engineering from Toyama University in1993. He received his M.E. and Ph.D. degrees from School of InformationScience from Japan Advanced Institute of Science and Technology in1995 and 1998, respectively. From 1998 to 2002, he was with ToshibaCorporation, Japan. From 2002 to 2004, he was a researcher, and from 2004to 2021, he had been an associate professor at National Instituteof Informatics, Japan. From 2021 to 2024, he was a Professorof Waseda Research Institute for Science and Engineering,Waseda University, Japan. His research interests include Security and Privacy SoftwareEngineering and Software Engineering for Machine Learning-basedSystems. He is a member of the Information Processing Society of Japan(IPSJ), the Institute of Electronics, Information and CommunicationEngineers (IEICE) and Japan Society for Software Science andTechnology (JSSST), the Japanese Society for Artificial Intelligence (JSAI) and IEEE CS. He had been a board member of a SIG of MachineLearning Systems Engineering since 2018, a board member of JSSST from2011 to 2015 and an auditor of JSSST from 2017 to 2021.He had been a chair of IEEE CS Japan Chapter in 2017, 2018 and 2020.'
        }
        // 
        // ... 其他演讲者数据 ...
      ]
    }
  },
  methods: {
    // 获取图片URL的方法
    getImageUrl(name) {
      return new URL(`../assets/image/photos/${name}`, import.meta.url).href
    }
  }
}
</script>

<style lang="less" scoped>
.keynote-speakers {
  color: #333;
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  // 主标题样式
  .title1 {
    color: #1a365d;
    font-size: 2.5rem;
    margin-bottom: 2rem;
    text-align: center;
  }

  // 每个演讲者部分的样式
  .speaker-section {
    margin-bottom: 2rem;
  }

  // 演讲者内容布局
  .speaker-content {
    display: flex;
    gap: 2rem;
    margin-bottom: 1rem;
  }

  // 演讲者照片样式
  .speaker-photo {
    flex: 0 0 200px;
    img {
      width: 100%;
      height: 220px;
      object-fit: cover;
      border-radius: 5px;
    }
  }

  // 演讲者信息样式
  .speaker-info {
    flex: 1;
    p {
      margin-bottom: 0.5rem;
      line-height: 1.6;
    }
  }

  // 演讲者姓名样式
  .speaker-name {
    color: #2a4365;
    font-size: 1.8rem;
    margin-bottom: 1rem;
    font-weight: bold;
    text-decoration: underline;
  }

  // 演讲者简历样式
  .speaker-bio {
    margin-top: 1rem;
    line-height: 1.4;
  }

  // 粗体文本样式
  .bold {
    font-weight: bold;
    color: #2c5282;
  }

  // 斜体文本样式
  .italic {
    font-style: italic;
  }

  // 分隔线样式
  .el-divider {
    margin: 2rem 0;
  }
}

// 响应式布局：在小屏幕上调整布局
@media (max-width: 768px) {
  .keynote-speakers {
    .speaker-content {
      flex-direction: column;
    }

    .speaker-photo {
      margin-bottom: 1rem;
    }
  }
}
</style>


<!--
<template>
  <div class="keynote-speakers">
    <div class="title1 font-merri">Keynote Speakers</div>
    <div class="title2 section-title">Joseph Sifakis, Verimag</div>

    <div class="content">
      <div class="pa">
        <p>
          <span class="bold">Keynote: </span>
          <span>&nbsp;Trustworthy Intelligent Systems – A Daunting Challenge</span>
        </p>
      </div>
      
      <div class="pa">
        <p>
          <span class="bold">Abstract: </span>
          <span class="italic">&nbsp;Systems engineering today is torn between two contradictory trends. On the one hand, the construction of intelligent systems, capable of situation awareness and adaptive decision-making through the use of AI-based components; on the other, the need for trustworthiness guarantees despite the non-explicability of AI components. The situation is exacerbated by the need for increasingly complex and integrated heterogeneous systems, and by the fact that in the current debate on "safe AI", key players in the field are promoting approaches that break with the technical safety concept of systems engineering.</span>
        </p>
        <p class="italic indent">We consider that a system is explainable if it is possible to characterize its relevant behavior by faithful models that lend themselves to analysis and provide a basis for understanding. We argue that AI will remain largely inexplicable. Ignoring this limitation by ascribing anthropomorphic properties to AI systems is technically untenable.</p>
        <p class="italic indent">We need rigorous system design methodologies that integrate model-based and data-driven AI te chniques, enabling in particular the construction of reliable systems integrating unreliable AI components. These methodologies will be characterized by the following important changes: </p>
        <ul>
          <li class="italic indent">Breaking with the idea that system can be guaranteed trustworthy at design time. Instead, systems must be designed to evolve, with no endpoint in their evolution, using computational intelligence, monitoring techniques and over-the-air upgrades.</li>
          <li class="italic indent">A shift from verification to empirical validation using test and simulation, which in principle does not allow confidence levels achieved using model-based methods. </li>
          <li class="italic indent">A better integration of design for dependability into the system development cycle, by jointly addressing safety and security issues, and relying heavily on automated tools.</li>
        </ul>
        <p class="italic indent">We advocate the need for a new foundation for system design that responds to these needs, leveraging knowledge management to compensate for weaknesses arising from the obsolescence of model-based techniques.</p>
      </div>
      
      <div>
        <p>
          <span class="bold">Bio: </span>
          <span>&nbsp;Professor Joseph Sifakis is Emeritus Research Director at Verimag. He has been a full professor at Ecole Polytechnique Fédérale de Lausanne (EPFL) for the period 2011-2016. He is the founder of the Verimag laboratory in Grenoble, a leading laboratory in the area of safety critical systems that he directed for 13 years.</span>
        </p>
        <p class="indent">Joseph Sifakis has made significant and internationally recognized contributions to the design of trustworthy systems in many application areas, including avionics and space systems, telecommunications, and production systems. His current research focuses on autonomous systems, in particular self-driving cars and autonomous telecommunication systems. In 2007, he received the Turing Award, recognized as the "highest distinction in computer science", for his contribution to the theory and application of model checking, the most widely used system verification technique. </p>
        <p class="indent">Joseph Sifakis is a member of six academies and a frequent speaker at international scientific, technical and public forums.</p>
      </div>
    </div>

    <el-divider />

    <div class="title2 section-title">Zheng Zheng, Beihang University</div>

    <div class="content">
      <div class="pa">
        <p>
          <span class="bold">Keynote: </span>
          <span>&nbsp;Reliability and Testing of Reinforcement Learning Systems</span>
        </p>
      </div>

      <div class="pa">
        <p>
          <span class="bold">Abstract: </span>
          <span class="italic">&nbsp;As reinforcement learning (RL) systems proliferate across various domains, ensuring their reliability becomes crucial. This presentation provides a comprehensive examination of RL system reliability and testing, focusing on their unique characteristics. The topics include:</span>
        </p>

        <ul>
          <li class="italic indent">Analysis of reliability and testing attributes of RL systems.</li>
          <li class="italic indent">Construction of metamorphic relations tailored for RL.</li>
          <li class="italic indent">Introduction of coverage metrics specific to RL scenarios.</li>
          <li class="italic indent">Methods for generating test cases for RL environments.</li>
        </ul>

        <p class="italic indent">The talk offers insights into the challenges and methodologies for validating and ensuring the robustness of reinforcement learning systems in diverse applications.</p>
      </div>

      <div>
        <p>
          <span class="bold">Bio: </span>
          <span>&nbsp;Zheng Zheng is a professor at Beihang University and the deputy dean of School of Automation Science and Electrical Engineering. His research work is primarily concerned with software reliability and testing. Recently, He paid more attention on the intelligent software reliability engineering. He is co-author of over 100 journal and conference publications, including IEEE TDSC, IEEE TIFS, IEEE TSE, IEEE TR, IEEE TSC, JSS and so on. He serves for IEEE PRDC2019, IEEE DASC 2019, IEEE ISSRE 2020, IEEE QRS 2021 as PC Co-Chairs, as well as WoSAR 2019, DeIS 2020 and DeIS 2021 as General Co-Chairs. He is Editor-in-chief of Atlantis Highlights in Engineering (Springer Nature), Associate Editor of IEEE TR (2021- ), Elsevier KBS (2018- ) and Springer IJCIS (2012- ) and Guest Editor of IEEE TDSC (2021). He is IEEE Senior Member and IEEE CIS Emerging Technologies TC member.</span>
        </p>
      </div>
    </div>

    <el-divider />

    <div class="title2 section-title">Domenico Cotrone, University of Naples Federico II</div>

    <div class="content">
      <div class="pa">
        <p>
          <span class="bold">Keynote: </span>
          <span>&nbsp;Unveiling the Veil: Towards the Trustworthiness of AI Code Generators</span>
        </p>
      </div>

      <div class="pa">
        <p>
          <span class="bold">Abstract: </span>
          <span class="italic">&nbsp;Nowadays, AI code generators have emerged as powerful tools transforming the software development landscape. These tools promise accelerated productivity and efficiency, but they also raise crucial questions regarding the trustworthiness of the code they produce. This keynote talk delves into the heart of this critical issue, aiming to provide a comprehensive understanding of the topics related to the trustworthiness of AI code generators, focusing on the security and robustness aspects of these AI-powered solutions.</span>
        </p>

        <p class="italic indent">Beginning with an in-depth examination of the security and robustness landscape surrounding AI code generators, the talk will dissect the common threats and risks associated with new technology impacting our everyday lives. From adversarial inputs to poisoning attacks, understanding these potential pitfalls is crucial for developers and organizations alike.</p>
      </div>

      <div>
        <p>
          <span class="bold">Bio: </span>
          <span>&nbsp;Domenico Cotroneo is a Full Professor at the Department of Electrical Engineering and Information Technology, University of Naples Federico II. He is also an IEEE Senior Member. He has served on the Technical Program Committee of important conferences on Dependability and Software Reliability, eg., IEEE/IFIP DSN, IEEE SRDS, Safecomp, IEEE ISSRE, and IEEE ICDS. Domenico’s research activities cover the following areas: dependability assessment of complex software systems, software fault injection, and software performance degradation analysis.</span>
        </p>
      </div>
    </div>

    <el-divider />
    
    <div class="title2 section-title">Ryan Cotterell, ETH Zürich</div> 
    <p class="pa-content p">TBD</p>
  </div>
</template>

<style lang="less" scoped>
.keynote-speakers {
  .section-title {
    margin: 1.6rem 0 0.5rem;
  }

  .content {
    font-size: 2rem;

    .pa {
      margin-bottom: 1rem;
    }

    .bold {
      font-weight: bold;
    }
    .italic {
      font-style: italic;
    }
    .indent {
      text-indent: 2rem;
    }
  }

  .pa-content {
    text-indent: 2rem;
    line-height: 1.6;
  }
}
</style>
-->