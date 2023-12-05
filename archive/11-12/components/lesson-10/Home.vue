<script>
import ChoiceGroup from './ChoiceGroup.vue'
import ContactItem from './ContactItem.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'LessonTen',

  components: {
    ChoiceGroup,
    ContactItem
  },

  data() {
    return {
      searchString: '',
      screen: 'contacts',
      groupToView: 'customers',
      groupsView: false
    }
  },

  computed: {
    ...mapGetters('lesson10', ['getContacts']),

    contactsList() {
      if (this.searchString) {
        return this.getContacts.filter(
          (contact) =>
            contact.first_name.toLowerCase().includes(this.searchString.toLowerCase()) ||
            contact?.last_name?.toLowerCase().includes(this.searchString.toLowerCase())
        )
      }

      return this.getContacts
    },

    contactsListByGroup() {
      if (this.groupToView.length) {
        return this.getContacts.filter((contact) => contact.group === this.groupToView)
      }

      return []
    },
    isGoupViewSelected() {
      return this.$route.params.groups === 'groups'
    }
  },

  watch: {
    isGoupViewSelected(newValue) {
      this.screen = newValue ? 'groups' : 'contacts'
    }
  },

  mounted() {
    this.screen = this.$route.params.groups === 'groups' ? 'groups' : 'contacts'
  },

  methods: {
    setContactGroup(group) {
      this.newContact.group = group
    },
    setGroupToView(group) {
      this.groupToView = group
    }
  }
}
</script>
<template>
  <div class="task-section">
    <div class="main-box">
      <input
        v-model="searchString"
        :disabled="screen !== 'contacts'"
        type="string"
        class="search-input"
      />
      <div class="content-section">
        <div v-if="screen === 'contacts'" class="add-contact"></div>
        <div v-if="screen === 'groups'" class="add-contact">
          <ChoiceGroup @groupChoice="setGroupToView" />
        </div>

        <ul v-if="screen === 'contacts'">
          <li v-for="contact in contactsList" :key="contact.id">
            <ContactItem
              :first_name="contact.first_name"
              :last_name="contact.last_name"
              :emails="contact.emails"
            />
          </li>
        </ul>
        <ul v-if="screen === 'groups'">
          <li v-for="contact in contactsListByGroup" :key="contact.id">
            <ContactItem
              :first_name="contact.first_name"
              :last_name="contact.last_name"
              :emails="contact.emails"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  margin-top: 35px;
}
.task-section {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  padding: 5px;
  min-width: 800px;
  min-height: 680px;
}
.main-box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 5px;
  width: 500px;
  min-height: 680px;
}
.tabs-section {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 15px;
  min-height: 30px;
  min-width: 400px;
  margin-top: 10px;
}
.content-section {
  min-width: 437px;
}
.search-input {
  max-width: 70%;
  min-height: 20px;
  border: 1px solid #9cd0cd;
  border-radius: 5px;
}
.search-input:disabled {
  border: 1px solid grey;
  border-radius: 5px;
}
.form-input {
  margin-left: 10px;
}
details > summary {
  display: flex;
  align-items: center;
  background-color: #c0e9e7;
  padding: 3px;
  margin: 2px;
  border-radius: 50px;
  min-width: 400px;
  min-height: 30px;
  padding-left: 30px;
  cursor: pointer;
}
.add-contact {
  margin-top: 15px;
}
.add-contact-button {
  margin-top: 15px;
}
.choise-section {
  display: flex;
  flex-direction: row;
}
.choose-wiev {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 30px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
