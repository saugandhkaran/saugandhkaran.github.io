<template>
<div class="section">
  <div>
    <div class="flex-container column">
      <h3 class="text-center">Experiences</h3>
      <div v-for="experience in myExperience" :key="experience.date" class="card">
        <img class="experience-image" :src="experience.image">
        <div>
        <p style="color: #d62828;"><strong>{{experience.position}}, </strong>{{experience.company}}</p>
        <p class="work-date">{{experience.date}}</p>
        <p class="work-description">{{experience.description}}</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Experience',
  components: {
  },
  data () {
    return {
      activeExperience: '',
      myExperience: [
        {
          date: 'May 2021 - Present',
          position: 'Software Engineer',
          company: 'Zalando SE',
          image: require('../assets/zalando.png'),
          description: 'Me and my team are responsible for making the checkout experience of 21 million active customers across 26 countries smoother and hasslefree on web platform.'
        },
        {
          date: 'Jun 2020 - Mar 2021',
          position: 'Development Engineer',
          company: 'ABN AMRO via Sogeti',
          image: require('../assets/ABN.png'),
          description: 'I was part of a team where the focus was on making the onboarding experience into investment easier for customers.'
        },
        {
          date: 'Jan 2020 - Present',
          position: 'Co-founder',
          company: 'ebattle.online',
          image: require('../assets/DP.png'),
          description: 'A humble attempt to realise my idea into a reality. An online game orchestration platform.'
        },
        {
          date: 'Aug 2019 - Mar 2020',
          position: 'Senior Frontend Developer',
          company: 'Kamer van Koophandel via Sogeti',
          image: require('../assets/KVK.png'),
          description: 'I was part of a team to create a social network platform for big organisations and freelancers to connect and exchange their ideas.'
        },
        {
          date: 'May 2019 - Aug 2019',
          position: 'Javascript Developer',
          company: 'Stitching Kinderen Kankervrij (KiKa) via Sogeti',
          image: require('../assets/kika.png'),
          description: 'I was part of building a social network platform for kids suffering from chronic diseases. It was a PWA where children can chat with each other, create events and share their thoughts.'
        },
        {
          date: 'May 2016 - Apr 2019',
          position: 'Development Engineer',
          company: 'ABN AMRO via Infosys',
          image: require('../assets/ABN.png'),
          description: 'I was part of a Enterprise Content Management team responsible to decommision a liscenced product and create a new tool using open source. The tool is currently used in 7 countries.'
        },
        {
          date: 'May 2016 - Apr 2017',
          position: 'Chief UI Designer',
          company: 'OSM Cult',
          image: require('../assets/osmcult.png'),
          description: 'I was responsible for creating the UI designs of the website. I was also responsible for creating digital content for various marketing campaigns and company promotions.'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.card {
    padding: 5px 5px 5px 5px;
    margin: 5px 5px;
    -webkit-animation-name: popup;
    -webkit-animation-duration: 0.4s;
    animation-name: popup;
    animation-duration: 0.4s;
    display: flex;
    border-bottom: 2px solid #003049;
    .experience-image {
      width: 50px;
      height: 50px;
      border-radius: 6px;
    }
    .work-date {
      font-size: 0.8em;
      line-height: 1;
    }
    .work-description {
      line-height: 1.2;
      font-size: 0.9em;
      padding: 12px 5px;
    }
    p {
      margin: 0px;
      padding: 5px 5px;
      color: #003049;
    }
  }
  @-webkit-keyframes popup {
    from {opacity: 0}
    to {opacity: 1}
  }

  @keyframes popup {
      from {opacity: 0}
      to {opacity: 1}
  }

.images {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 200px;

    img {
      width: 60px;
      height: 60px;
      filter: grayscale(100%);
    }
  }

.remove-greyscale {
  filter: grayscale(0%) !important;
}
.flex-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  &.column {
    flex-direction: column;
    .card {
      padding: 5px 5px 5px 5px;
    }
  }
}
</style>
