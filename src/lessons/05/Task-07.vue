<template>
  <div class="task-section">
    <div class="main-box">
      <input
        v-model="searchString"
        :disabled="screen !== 'contacts'"
        type="string"
        class="search-input"
      />
      <div class="tabs-section">
        <ViewToggleButton
          @click="chooseScreen('contacts')"
          :screen="'Contacts'"
          :isSelected="selectedButton.contacts"
          :isActive="true"
        >
        </ViewToggleButton>
        <ViewToggleButton
          @click="chooseScreen('groups')"
          :screen="'Groups'"
          :isSelected="selectedButton.groups"
          :isActive="true"
        >
        </ViewToggleButton>
      </div>
      <div class="content-section">
        <div v-if="screen === 'contacts'" class="add-contact">
          <details>
            <summary>Add new contact</summary>
            <form>
              <label for="firstName">First name:</label>
              <input
                v-model="newContact.first_name"
                type="text"
                required
                id="firstName"
                name="firstName"
                class="form-input"
              /><br /><br />
              <label for="lastName">Last name:</label>
              <input
                v-model="newContact.last_name"
                type="text"
                required
                id="lastName"
                name="lastName"
                class="form-input"
              /><br /><br />
              <label for="email">Email:</label>
              <input
                v-model="newContact.emails"
                type="email"
                required
                id="email"
                name="email"
                class="form-input"
              />
              <p>Choose group:</p>
              <ChoiceGroup @groupChoice="setContactGroup" />
              <ViewToggleButton
                @click.prevent="addContact"
                :screen="'Add Contact'"
                :isActive="isCompleteContactData"
                :isSelected="isCompleteContactData"
                class="add-contact-button"
              ></ViewToggleButton>
            </form>
          </details>
        </div>
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

<script>
import { contacts } from './data/7_data_contacts'
import ViewToggleButton from './components/07/button.vue'
import ChoiceGroup from './components/07/choiceGroup.vue'
import ContactItem from './components/07/contact.vue'

const emptyContactTemplate = {
  first_name: '',
  last_name: '',
  emails: null,
  group: 'customers'
}

export default {
  data() {
    return {
      contacts,
      newContact: { ...emptyContactTemplate },
      searchString: '',
      screen: 'contacts',
      selected: {
        contacts: true,
        groups: false
      },
      groupToView: 'customers'
    }
  },
  components: {
    ViewToggleButton,
    ChoiceGroup,
    ContactItem
  },
  methods: {
    chooseScreen(screen) {
      // console.log(screen)
      this.screen = screen
    },
    setContactGroup(group) {
      this.newContact.group = group
    },
    setGroupToView(group) {
      console.log(group, 'groupToView')
      this.groupToView = group
    },
    addContact() {
      console.log('add')
      const id = Date.now()
      this.newContact.id = id
      this.newContact.emails = [this.newContact.emails]
      this.contacts.push(this.newContact)

      this.newContact = { ...emptyContactTemplate }
    }
  },
  computed: {
    contactsList() {
      if (this.searchString) {
        return contacts.filter(
          (contact) =>
            contact.first_name.toLowerCase().includes(this.searchString.toLowerCase()) ||
            contact?.last_name?.toLowerCase().includes(this.searchString.toLowerCase())
        )
      }

      return contacts
    },
    contactsListByGroup() {
      if (this.groupToView.length) {
        return contacts.filter((contact) => contact.group === this.groupToView)
      }

      return []
    },
    isCompleteContactData() {
      return !!(
        this.newContact.first_name.length &&
        this.newContact.last_name.length &&
        this.newContact.emails.length &&
        this.newContact.group.length
      )
    },
    selectedButton() {
      if (this.screen === 'contacts') {
        const selected = {
          contacts: true,
          groups: false
        }
        return selected
      }
      const selected = {
        contacts: false,
        groups: true
      }
      return selected
    }
  }
}
</script>
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
  border: 1px dotted #000;
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
