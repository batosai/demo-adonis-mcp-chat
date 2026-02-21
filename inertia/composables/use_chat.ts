import { ref, type Ref } from 'vue'
import { Chat } from '@ai-sdk/vue'
import type { UIMessage, ChatStatus } from 'ai'

const chat = new Chat({
  onError(error) {
    console.error('chat error:', error)
  },
})

// Access the Vue refs directly from VueChatState
// @ts-expect-error state is protected but we need direct ref access for Vue reactivity
const state = chat.state as {
  messagesRef: Ref<UIMessage[]>
  statusRef: Ref<ChatStatus>
  errorRef: Ref<Error | undefined>
}

export function useChat() {
  const input = ref('')

  function sendMessage() {
    if (!input.value.trim()) return
    chat.sendMessage({ text: input.value })
    input.value = ''
  }

  return {
    messages: state.messagesRef,
    status: state.statusRef,
    error: state.errorRef,
    input,
    sendMessage,
    stop: () => chat.stop(),
    regenerate: () => chat.regenerate(),
  }
}
