var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../../node_modules/lodash/isObject.js
var require_isObject = __commonJS({
  "../../node_modules/lodash/isObject.js"(exports, module) {
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    module.exports = isObject;
  }
});

// ../../node_modules/lodash/_freeGlobal.js
var require_freeGlobal = __commonJS({
  "../../node_modules/lodash/_freeGlobal.js"(exports, module) {
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    module.exports = freeGlobal;
  }
});

// ../../node_modules/lodash/_root.js
var require_root = __commonJS({
  "../../node_modules/lodash/_root.js"(exports, module) {
    var freeGlobal = require_freeGlobal();
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    module.exports = root;
  }
});

// ../../node_modules/lodash/now.js
var require_now = __commonJS({
  "../../node_modules/lodash/now.js"(exports, module) {
    var root = require_root();
    var now = function() {
      return root.Date.now();
    };
    module.exports = now;
  }
});

// ../../node_modules/lodash/_trimmedEndIndex.js
var require_trimmedEndIndex = __commonJS({
  "../../node_modules/lodash/_trimmedEndIndex.js"(exports, module) {
    var reWhitespace = /\s/;
    function trimmedEndIndex(string) {
      var index = string.length;
      while (index-- && reWhitespace.test(string.charAt(index))) {
      }
      return index;
    }
    module.exports = trimmedEndIndex;
  }
});

// ../../node_modules/lodash/_baseTrim.js
var require_baseTrim = __commonJS({
  "../../node_modules/lodash/_baseTrim.js"(exports, module) {
    var trimmedEndIndex = require_trimmedEndIndex();
    var reTrimStart = /^\s+/;
    function baseTrim(string) {
      return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
    }
    module.exports = baseTrim;
  }
});

// ../../node_modules/lodash/_Symbol.js
var require_Symbol = __commonJS({
  "../../node_modules/lodash/_Symbol.js"(exports, module) {
    var root = require_root();
    var Symbol2 = root.Symbol;
    module.exports = Symbol2;
  }
});

// ../../node_modules/lodash/_getRawTag.js
var require_getRawTag = __commonJS({
  "../../node_modules/lodash/_getRawTag.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var nativeObjectToString = objectProto.toString;
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    module.exports = getRawTag;
  }
});

// ../../node_modules/lodash/_objectToString.js
var require_objectToString = __commonJS({
  "../../node_modules/lodash/_objectToString.js"(exports, module) {
    var objectProto = Object.prototype;
    var nativeObjectToString = objectProto.toString;
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    module.exports = objectToString;
  }
});

// ../../node_modules/lodash/_baseGetTag.js
var require_baseGetTag = __commonJS({
  "../../node_modules/lodash/_baseGetTag.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var getRawTag = require_getRawTag();
    var objectToString = require_objectToString();
    var nullTag = "[object Null]";
    var undefinedTag = "[object Undefined]";
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    module.exports = baseGetTag;
  }
});

// ../../node_modules/lodash/isObjectLike.js
var require_isObjectLike = __commonJS({
  "../../node_modules/lodash/isObjectLike.js"(exports, module) {
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    module.exports = isObjectLike;
  }
});

// ../../node_modules/lodash/isSymbol.js
var require_isSymbol = __commonJS({
  "../../node_modules/lodash/isSymbol.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var symbolTag = "[object Symbol]";
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
    }
    module.exports = isSymbol;
  }
});

// ../../node_modules/lodash/toNumber.js
var require_toNumber = __commonJS({
  "../../node_modules/lodash/toNumber.js"(exports, module) {
    var baseTrim = require_baseTrim();
    var isObject = require_isObject();
    var isSymbol = require_isSymbol();
    var NAN = 0 / 0;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = baseTrim(value);
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    module.exports = toNumber;
  }
});

// ../../node_modules/lodash/debounce.js
var require_debounce = __commonJS({
  "../../node_modules/lodash/debounce.js"(exports, module) {
    var isObject = require_isObject();
    var now = require_now();
    var toNumber = require_toNumber();
    var FUNC_ERROR_TEXT = "Expected a function";
    var nativeMax = Math.max;
    var nativeMin = Math.min;
    function debounce2(func, wait, options) {
      var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject(options)) {
        leading = !!options.leading;
        maxing = "maxWait" in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = "trailing" in options ? !!options.trailing : trailing;
      }
      function invokeFunc(time) {
        var args = lastArgs, thisArg = lastThis;
        lastArgs = lastThis = void 0;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }
      function leadingEdge(time) {
        lastInvokeTime = time;
        timerId = setTimeout(timerExpired, wait);
        return leading ? invokeFunc(time) : result;
      }
      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
        return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
      }
      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
      }
      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        timerId = setTimeout(timerExpired, remainingWait(time));
      }
      function trailingEdge(time) {
        timerId = void 0;
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = void 0;
        return result;
      }
      function cancel() {
        if (timerId !== void 0) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = void 0;
      }
      function flush() {
        return timerId === void 0 ? result : trailingEdge(now());
      }
      function debounced() {
        var time = now(), isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
          if (timerId === void 0) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            clearTimeout(timerId);
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === void 0) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }
    module.exports = debounce2;
  }
});

// src/index.ts
import { getEmbeddingZeroVector as getEmbeddingZeroVector3 } from "@ai16z/eliza";
import { stringToUuid as stringToUuid3 } from "@ai16z/eliza";
import { elizaLogger as elizaLogger4 } from "@ai16z/eliza";
import {
  Client as Client5,
  Events,
  GatewayIntentBits,
  Partials
} from "discord.js";
import { EventEmitter as EventEmitter2 } from "events";

// src/actions/chat_with_attachments.ts
import { composeContext } from "@ai16z/eliza";
import { generateText as generateText2, trimTokens } from "@ai16z/eliza";
import { models } from "@ai16z/eliza";
import { parseJSONObjectFromText } from "@ai16z/eliza";
import {
  ModelClass as ModelClass2
} from "@ai16z/eliza";
var summarizationTemplate = `# Summarized so far (we are adding to this)
{{currentSummary}}

# Current attachments we are summarizing
{{attachmentsWithText}}

Summarization objective: {{objective}}

# Instructions: Summarize the attachments. Return the summary. Do not acknowledge this request, just summarize and continue the existing summary if there is one. Capture any important details based on the objective. Only respond with the new summary text.`;
var attachmentIdsTemplate = `# Messages we are summarizing 
{{recentMessages}}

# Instructions: {{senderName}} is requesting a summary of specific attachments. Your goal is to determine their objective, along with the list of attachment IDs to summarize.
The "objective" is a detailed description of what the user wants to summarize based on the conversation.
The "attachmentIds" is an array of attachment IDs that the user wants to summarize. If not specified, default to including all attachments from the conversation.

Your response must be formatted as a JSON block with this structure:
\`\`\`json
{
  "objective": "<What the user wants to summarize>",
  "attachmentIds": ["<Attachment ID 1>", "<Attachment ID 2>", ...]
}
\`\`\`
`;
var getAttachmentIds = async (runtime, message, state) => {
  state = await runtime.composeState(message);
  const context = composeContext({
    state,
    template: attachmentIdsTemplate
  });
  for (let i = 0; i < 5; i++) {
    const response = await generateText2({
      runtime,
      context,
      modelClass: ModelClass2.SMALL
    });
    console.log("response", response);
    const parsedResponse = parseJSONObjectFromText(response);
    if (parsedResponse?.objective && parsedResponse?.attachmentIds) {
      return parsedResponse;
    }
  }
  return null;
};
var summarizeAction = {
  name: "CHAT_WITH_ATTACHMENTS",
  similes: [
    "CHAT_WITH_ATTACHMENT",
    "SUMMARIZE_FILES",
    "SUMMARIZE_FILE",
    "SUMMARIZE_ATACHMENT",
    "CHAT_WITH_PDF",
    "ATTACHMENT_SUMMARY",
    "RECAP_ATTACHMENTS",
    "SUMMARIZE_FILE",
    "SUMMARIZE_VIDEO",
    "SUMMARIZE_AUDIO",
    "SUMMARIZE_IMAGE",
    "SUMMARIZE_DOCUMENT",
    "SUMMARIZE_LINK",
    "ATTACHMENT_SUMMARY",
    "FILE_SUMMARY"
  ],
  description: "Answer a user request informed by specific attachments based on their IDs. If a user asks to chat with a PDF, or wants more specific information about a link or video or anything else they've attached, this is the action to use.",
  validate: async (_runtime, message, _state) => {
    if (message.content.source !== "discord") {
      return false;
    }
    const keywords = [
      "attachment",
      "summary",
      "summarize",
      "research",
      "pdf",
      "video",
      "audio",
      "image",
      "document",
      "link",
      "file",
      "attachment",
      "summarize",
      "code",
      "report",
      "write",
      "details",
      "information",
      "talk",
      "chat",
      "read",
      "listen",
      "watch"
    ];
    return keywords.some(
      (keyword) => message.content.text.toLowerCase().includes(keyword.toLowerCase())
    );
  },
  handler: async (runtime, message, state, options, callback) => {
    state = await runtime.composeState(message);
    const callbackData = {
      text: "",
      // fill in later
      action: "CHAT_WITH_ATTACHMENTS_RESPONSE",
      source: message.content.source,
      attachments: []
    };
    const attachmentData = await getAttachmentIds(runtime, message, state);
    if (!attachmentData) {
      console.error("Couldn't get attachment IDs from message");
      return;
    }
    const { objective, attachmentIds } = attachmentData;
    const attachments = state.recentMessagesData.filter(
      (msg) => msg.content.attachments && msg.content.attachments.length > 0
    ).flatMap((msg) => msg.content.attachments).filter(
      (attachment) => attachmentIds.map((attch) => attch.toLowerCase().slice(0, 5)).includes(attachment.id.toLowerCase().slice(0, 5)) || // or check the other way
      attachmentIds.some((id) => {
        const attachmentId = id.toLowerCase().slice(0, 5);
        return attachment.id.toLowerCase().includes(attachmentId);
      })
    );
    const attachmentsWithText = attachments.map((attachment) => `# ${attachment.title}
${attachment.text}`).join("\n\n");
    let currentSummary = "";
    const model = models[runtime.character.modelProvider];
    const chunkSize = model.settings.maxOutputTokens;
    state.attachmentsWithText = attachmentsWithText;
    state.objective = objective;
    const context = composeContext({
      state,
      // make sure it fits, we can pad the tokens a bit
      template: trimTokens(
        summarizationTemplate,
        chunkSize + 500,
        "gpt-4o-mini"
        // TODO: make this dynamic and generic
      )
    });
    const summary = await generateText2({
      runtime,
      context,
      modelClass: ModelClass2.SMALL
    });
    currentSummary = currentSummary + "\n" + summary;
    if (!currentSummary) {
      console.error("No summary found, that's not good!");
      return;
    }
    callbackData.text = currentSummary.trim();
    if (callbackData.text && (currentSummary.trim()?.split("\n").length < 4 || currentSummary.trim()?.split(" ").length < 100)) {
      callbackData.text = `Here is the summary:
\`\`\`md
${currentSummary.trim()}
\`\`\`
`;
      await callback(callbackData);
    } else if (currentSummary.trim()) {
      const summaryFilename = `content/summary_${Date.now()}`;
      await runtime.cacheManager.set(summaryFilename, currentSummary);
      await callback(
        {
          ...callbackData,
          text: `I've attached the summary of the requested attachments as a text file.`
        },
        [summaryFilename]
      );
    } else {
      console.warn(
        "Empty response from chat with attachments action, skipping"
      );
    }
    return callbackData;
  },
  examples: [
    [
      {
        user: "{{user1}}",
        content: {
          text: "Can you summarize the attachments b3e23, c4f67, and d5a89?"
        }
      },
      {
        user: "{{user2}}",
        content: {
          text: "Sure thing! I'll pull up those specific attachments and provide a summary of their content.",
          action: "CHAT_WITH_ATTACHMENTS"
        }
      }
    ],
    [
      {
        user: "{{user1}}",
        content: {
          text: "I need a technical summary of the PDFs I sent earlier - a1b2c3.pdf, d4e5f6.pdf, and g7h8i9.pdf"
        }
      },
      {
        user: "{{user2}}",
        content: {
          text: "I'll take a look at those specific PDF attachments and put together a technical summary for you. Give me a few minutes to review them.",
          action: "CHAT_WITH_ATTACHMENTS"
        }
      }
    ],
    [
      {
        user: "{{user1}}",
        content: {
          text: "Can you watch this video for me and tell me which parts you think are most relevant to the report I'm writing? (the one I attached in my last message)"
        }
      },
      {
        user: "{{user2}}",
        content: {
          text: "sure, no problem.",
          action: "CHAT_WITH_ATTACHMENTS"
        }
      }
    ],
    [
      {
        user: "{{user1}}",
        content: {
          text: "can you read my blog post and give me a detailed breakdown of the key points I made, and then suggest a handful of tweets to promote it?"
        }
      },
      {
        user: "{{user2}}",
        content: {
          text: "great idea, give me a minute",
          action: "CHAT_WITH_ATTACHMENTS"
        }
      }
    ]
  ]
};
var chat_with_attachments_default = summarizeAction;

// src/actions/download_media.ts
import path from "path";
import { composeContext as composeContext2 } from "@ai16z/eliza";
import { parseJSONObjectFromText as parseJSONObjectFromText2 } from "@ai16z/eliza";
import {
  ModelClass as ModelClass3,
  ServiceType
} from "@ai16z/eliza";
import { generateText as generateText3 } from "@ai16z/eliza";
var mediaUrlTemplate = `# Messages we are searching for a media URL
{{recentMessages}}

# Instructions: {{senderName}} is requesting to download a specific media file (video or audio). Your goal is to determine the URL of the media they want to download.
The "mediaUrl" is the URL of the media file that the user wants downloaded. If not specified, return null.

Your response must be formatted as a JSON block with this structure:
\`\`\`json
{
  "mediaUrl": "<Media URL>"
}
\`\`\`
`;
var getMediaUrl = async (runtime, message, state) => {
  if (!state) {
    state = await runtime.composeState(message);
  }
  const context = composeContext2({
    state,
    template: mediaUrlTemplate
  });
  for (let i = 0; i < 5; i++) {
    const response = await generateText3({
      runtime,
      context,
      modelClass: ModelClass3.SMALL
    });
    const parsedResponse = parseJSONObjectFromText2(response);
    if (parsedResponse?.mediaUrl) {
      return parsedResponse.mediaUrl;
    }
  }
  return null;
};
var download_media_default = {
  name: "DOWNLOAD_MEDIA",
  similes: [
    "DOWNLOAD_VIDEO",
    "DOWNLOAD_AUDIO",
    "GET_MEDIA",
    "DOWNLOAD_PODCAST",
    "DOWNLOAD_YOUTUBE"
  ],
  description: "Downloads a video or audio file from a URL and attaches it to the response message.",
  validate: async (runtime, message, _state) => {
    if (message.content.source !== "discord") {
      return false;
    }
  },
  handler: async (runtime, message, state, options, callback) => {
    const videoService = runtime.getService(ServiceType.VIDEO).getInstance();
    if (!state) {
      state = await runtime.composeState(message);
    }
    const mediaUrl = await getMediaUrl(runtime, message, state);
    if (!mediaUrl) {
      console.error("Couldn't get media URL from messages");
      return;
    }
    const videoInfo = await videoService.fetchVideoInfo(mediaUrl);
    const mediaPath = await videoService.downloadVideo(videoInfo);
    const response = {
      text: `I downloaded the video "${videoInfo.title}" and attached it below.`,
      action: "DOWNLOAD_MEDIA_RESPONSE",
      source: message.content.source,
      attachments: []
    };
    const filename = path.basename(mediaPath);
    const maxRetries = 3;
    let retries = 0;
    while (retries < maxRetries) {
      try {
        await callback(
          {
            ...response
          },
          ["content_cache/" + filename]
        );
        break;
      } catch (error) {
        retries++;
        console.error(
          `Error sending message (attempt ${retries}):`,
          error
        );
        if (retries === maxRetries) {
          console.error(
            "Max retries reached. Failed to send message with attachment."
          );
          break;
        }
        await new Promise((resolve) => setTimeout(resolve, 2e3));
      }
    }
    return response;
  },
  examples: [
    [
      {
        user: "{{user1}}",
        content: {
          text: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        }
      },
      {
        user: "{{user2}}",
        content: {
          text: "Downloading the YouTube video now, one sec",
          action: "DOWNLOAD_MEDIA"
        }
      }
    ],
    [
      {
        user: "{{user1}}",
        content: {
          text: "Can you grab this video for me? https://vimeo.com/123456789"
        }
      },
      {
        user: "{{user2}}",
        content: {
          text: "Sure thing, I'll download that Vimeo video for you",
          action: "DOWNLOAD_MEDIA"
        }
      }
    ],
    [
      {
        user: "{{user1}}",
        content: {
          text: "I need this video downloaded: https://www.youtube.com/watch?v=abcdefg"
        }
      },
      {
        user: "{{user2}}",
        content: {
          text: "No problem, I'm on it. I'll have that YouTube video downloaded in a jiffy",
          action: "DOWNLOAD_MEDIA"
        }
      }
    ]
  ]
};

// src/actions/joinvoice.ts
import {
  composeContext as composeContext3
} from "@ai16z/eliza";
import {
  ChannelType
} from "discord.js";
var joinvoice_default = {
  name: "JOIN_VOICE",
  similes: [
    "JOIN_VOICE",
    "JOIN_VC",
    "JOIN_VOICE_CHAT",
    "JOIN_VOICE_CHANNEL",
    "JOIN_MEETING",
    "JOIN_CALL"
  ],
  validate: async (_runtime, message, state) => {
    if (message.content.source !== "discord") {
      return false;
    }
    if (!state.discordClient) {
      return;
    }
    const keywords = [
      "join",
      "come to",
      "come on",
      "enter",
      "voice",
      "chat",
      "talk",
      "call",
      "hop on",
      "get on",
      "vc",
      "meeting",
      "discussion"
    ];
    if (!keywords.some(
      (keyword) => message.content.text.toLowerCase().includes(keyword)
    )) {
      return false;
    }
    const client = state.discordClient;
    const isConnectedToVoice = client.voice.adapters.size === 0;
    return isConnectedToVoice;
  },
  description: "Join a voice channel to participate in voice chat.",
  handler: async (runtime, message, state) => {
    if (!state) {
      console.error("State is not available.");
    }
    const discordMessage = state.discordChannel || state.discordMessage;
    if (!discordMessage.content) {
      discordMessage.content = message.content.text;
    }
    const id = discordMessage.guild?.id;
    const client = state.discordClient;
    const voiceChannels = client.guilds.cache.get(id).channels.cache.filter(
      (channel) => channel.type === ChannelType.GuildVoice
    );
    const messageContent = discordMessage.content;
    const targetChannel = voiceChannels.find((channel) => {
      const name = channel.name.toLowerCase();
      const replacedName = name.replace(/[^a-z0-9 ]/g, "");
      return name.includes(messageContent) || messageContent.includes(name) || replacedName.includes(messageContent) || messageContent.includes(replacedName);
    });
    if (!state.voiceManager) {
      state.voiceManager = new VoiceManager({
        client: state.discordClient,
        runtime
      });
    }
    if (targetChannel) {
      state.voiceManager.joinVoiceChannel({
        channelId: targetChannel.id,
        guildId: discordMessage.guild?.id,
        adapterCreator: client.guilds.cache.get(id).voiceAdapterCreator
      });
      return true;
    } else {
      const member = discordMessage.member;
      if (member?.voice?.channel) {
        state.voiceManager.joinVoiceChannel({
          channelId: member.voice.channel.id,
          guildId: discordMessage.guild?.id,
          adapterCreator: client.guilds.cache.get(id).voiceAdapterCreator
        });
        return true;
      }
      const messageTemplate = `
The user has requested to join a voice channel.
Here is the list of channels available in the server:
{{voiceChannels}}

Here is the user's request:
{{userMessage}}

Please respond with the name of the voice channel which the bot should join. Try to infer what channel the user is talking about. If the user didn't specify a voice channel, respond with "none".
You should only respond with the name of the voice channel or none, no commentary or additional information should be included.
`;
      const guessState = {
        userMessage: message.content.text,
        voiceChannels: voiceChannels.map((channel) => channel.name).join("\n")
      };
      const context = composeContext3({
        template: messageTemplate,
        state: guessState
      });
      const _datestr = (/* @__PURE__ */ new Date()).toUTCString().replace(/:/g, "-");
      const responseContent = await generateText({
        runtime,
        context,
        modelClass: ModelClass.SMALL
      });
      runtime.databaseAdapter.log({
        body: { message, context, response: responseContent },
        userId: message.userId,
        roomId: message.roomId,
        type: "joinvoice"
      });
      if (responseContent && responseContent.trim().length > 0) {
        const channelName = responseContent.toLowerCase();
        const targetChannel2 = voiceChannels.find((channel) => {
          const name = channel.name.toLowerCase();
          const replacedName = name.replace(/[^a-z0-9 ]/g, "");
          return name.includes(channelName) || channelName.includes(name) || replacedName.includes(channelName) || channelName.includes(replacedName);
        });
        if (targetChannel2) {
          state.voiceManager.joinVoiceChannel({
            channelId: targetChannel2.id,
            guildId: discordMessage.guild?.id,
            adapterCreator: client.guilds.cache.get(id).voiceAdapterCreator
          });
          return true;
        }
      }
      await discordMessage.reply(
        "I couldn't figure out which channel you wanted me to join."
      );
      return false;
    }
  },
  examples: [
    [
      {
        user: "{{user1}}",
        content: {
          text: "Hey, let's jump into the 'General' voice and chat"
        }
      },
      {
        user: "{{user2}}",
        content: {
          text: "Sounds good",
          action: "JOIN_VOICE"
        }
      }
    ],
    [
      {
        user: "{{user1}}",
        content: {
          text: "{{user2}}, can you join the vc, I want to discuss our strat"
        }
      },
      {
        user: "{{user2}}",
        content: {
          text: "Sure I'll join right now",
          action: "JOIN_VOICE"
        }
      }
    ],
    [
      {
        user: "{{user1}}",
        content: {
          text: "hey {{user2}}, we're having a team meeting in the 'conference' voice channel, plz join us"
        }
      },
      {
        user: "{{user2}}",
        content: {
          text: "OK see you there",
          action: "JOIN_VOICE"
        }
      }
    ],
    [
      {
        user: "{{user1}}",
        content: {
          text: "{{user2}}, let's have a quick voice chat in the 'Lounge' channel."
        }
      },
      {
        user: "{{user2}}",
        content: {
          text: "kk be there in a sec",
          action: "JOIN_VOICE"
        }
      }
    ],
    [
      {
        user: "{{user1}}",
        content: {
          text: "Hey {{user2}}, can you join me in the 'Music' voice channel"
        }
      },
      {
        user: "{{user2}}",
        content: {
          text: "Sure",
          action: "JOIN_VOICE"
        }
      }
    ],
    [
      {
        user: "{{user1}}",
        content: {
          text: "join voice chat with us {{user2}}"
        }
      },
      {
        user: "{{user2}}",
        content: {
          text: "coming",
          action: "JOIN_VOICE"
        }
      }
    ],
    [
      {
        user: "{{user1}}",
        content: {
          text: "hop in vc {{user2}}"
        }
      },
      {
        user: "{{user2}}",
        content: {
          text: "joining now",
          action: "JOIN_VOICE"
        }
      }
    ],
    [
      {
        user: "{{user1}}",
        content: {
          text: "get in vc with us {{user2}}"
        }
      },
      {
        user: "{{user2}}",
        content: {
          text: "im in",
          action: "JOIN_VOICE"
        }
      }
    ]
  ]
};

// src/actions/leavevoice.ts
import { getVoiceConnection } from "@discordjs/voice";
import {
  ChannelType as ChannelType2
} from "discord.js";
var leavevoice_default = {
  name: "LEAVE_VOICE",
  similes: [
    "LEAVE_VOICE",
    "LEAVE_VC",
    "LEAVE_VOICE_CHAT",
    "LEAVE_VOICE_CHANNEL",
    "LEAVE_MEETING",
    "LEAVE_CALL"
  ],
  validate: async (runtime, message, state) => {
    if (message.content.source !== "discord") {
      return false;
    }
    if (!state.discordClient) {
      return false;
    }
    const keywords = [
      "leave",
      "exit",
      "stop",
      "quit",
      "get off",
      "get out",
      "bye",
      "cya",
      "see you",
      "hop off",
      "get off",
      "voice",
      "vc",
      "chat",
      "call",
      "meeting",
      "discussion"
    ];
    if (!keywords.some(
      (keyword) => message.content.text.toLowerCase().includes(keyword)
    )) {
      return false;
    }
    const client = state.discordClient;
    const isConnectedToVoice = client.voice.adapters.size > 0;
    return isConnectedToVoice;
  },
  description: "Leave the current voice channel.",
  handler: async (runtime, message, state) => {
    if (!state.discordClient) {
      return;
    }
    const discordMessage = state.discordMessage || state.discordChannel;
    if (!discordMessage) {
      throw new Error("Discord message is not available in the state.");
    }
    const voiceChannels = state.discordClient?.guilds.cache.get(discordMessage.guild?.id)?.channels.cache.filter(
      (channel) => channel.type === ChannelType2.GuildVoice
    );
    voiceChannels?.forEach((_channel) => {
      const connection = getVoiceConnection(
        discordMessage.guild?.id
      );
      if (connection) {
        connection.destroy();
      }
    });
    return true;
  },
  examples: [
    [
      {
        user: "{{user1}}",
        content: {
          text: "Hey {{user2}} please leave the voice channel"
        }
      },
      {
        user: "{{user2}}",
        content: {
          text: "Sure",
          action: "LEAVE_VOICE"
        }
      }
    ],
    [
      {
        user: "{{user1}}",
        content: {
          text: "I have to go now but thanks for the chat"
        }
      },
      {
        user: "{{user2}}",
        content: {
          text: "You too, talk to you later",
          action: "LEAVE_VOICE"
        }
      }
    ],
    [
      {
        user: "{{user1}}",
        content: {
          text: "Great call everyone, hopping off now",
          action: "LEAVE_VOICE"
        }
      },
      {
        user: "{{user2}}",
        content: {
          text: "Agreed, I'll hop off too",
          action: "LEAVE_VOICE"
        }
      }
    ],
    [
      {
        user: "{{user1}}",
        content: {
          text: "Hey {{user2}} I need you to step away from the voice chat for a bit"
        }
      },
      {
        user: "{{user2}}",
        content: {
          text: "No worries, I'll leave the voice channel",
          action: "LEAVE_VOICE"
        }
      }
    ],
    [
      {
        user: "{{user1}}",
        content: {
          text: "{{user2}}, I think we covered everything, you can leave the voice chat now"
        }
      },
      {
        user: "{{user2}}",
        content: {
          text: "Sounds good, see you both later",
          action: "LEAVE_VOICE"
        }
      }
    ],
    [
      {
        user: "{{user1}}",
        content: {
          text: "leave voice {{user2}}"
        }
      },
      {
        user: "{{user2}}",
        content: {
          text: "ok leaving",
          action: "LEAVE_VOICE"
        }
      }
    ],
    [
      {
        user: "{{user1}}",
        content: {
          text: "plz leave the voice chat {{user2}}"
        }
      },
      {
        user: "{{user2}}",
        content: {
          text: "aight im out",
          action: "LEAVE_VOICE"
        }
      }
    ],
    [
      {
        user: "{{user1}}",
        content: {
          text: "yo {{user2}} gtfo the vc"
        }
      },
      {
        user: "{{user2}}",
        content: {
          text: "sorry, talk to you later",
          action: "LEAVE_VOICE"
        }
      }
    ]
  ]
};

// src/actions/summarize_conversation.ts
import { composeContext as composeContext4 } from "@ai16z/eliza";
import { generateText as generateText4, splitChunks, trimTokens as trimTokens2 } from "@ai16z/eliza";
import { getActorDetails } from "@ai16z/eliza";
import { models as models2 } from "@ai16z/eliza";
import { parseJSONObjectFromText as parseJSONObjectFromText3 } from "@ai16z/eliza";
import {
  ModelClass as ModelClass4
} from "@ai16z/eliza";
var summarizationTemplate2 = `# Summarized so far (we are adding to this)
{{currentSummary}}

# Current conversation chunk we are summarizing (includes attachments)
{{memoriesWithAttachments}}

Summarization objective: {{objective}}

# Instructions: Summarize the conversation so far. Return the summary. Do not acknowledge this request, just summarize and continue the existing summary if there is one. Capture any important details to the objective. Only respond with the new summary text.
Your response should be extremely detailed and include any and all relevant information.`;
var dateRangeTemplate = `# Messages we are summarizing (the conversation is continued after this)
{{recentMessages}}

# Instructions: {{senderName}} is requesting a summary of the conversation. Your goal is to determine their objective, along with the range of dates that their request covers.
The "objective" is a detailed description of what the user wants to summarize based on the conversation. If they just ask for a general summary, you can either base it off the converation if the summary range is very recent, or set the object to be general, like "a detailed summary of the conversation between all users".
The "start" and "end" are the range of dates that the user wants to summarize, relative to the current time. The start and end should be relative to the current time, and measured in seconds, minutes, hours and days. The format is "2 days ago" or "3 hours ago" or "4 minutes ago" or "5 seconds ago", i.e. "<integer> <unit> ago".
If you aren't sure, you can use a default range of "0 minutes ago" to "2 hours ago" or more. Better to err on the side of including too much than too little.

Your response must be formatted as a JSON block with this structure:
\`\`\`json
{
  "objective": "<What the user wants to summarize>",
  "start": "0 minutes ago",
  "end": "2 hours ago"
}
\`\`\`
`;
var getDateRange = async (runtime, message, state) => {
  state = await runtime.composeState(message);
  const context = composeContext4({
    state,
    template: dateRangeTemplate
  });
  for (let i = 0; i < 5; i++) {
    const response = await generateText4({
      runtime,
      context,
      modelClass: ModelClass4.SMALL
    });
    console.log("response", response);
    const parsedResponse = parseJSONObjectFromText3(response);
    if (parsedResponse) {
      if (parsedResponse.objective && parsedResponse.start && parsedResponse.end) {
        const startIntegerString = parsedResponse.start.match(/\d+/)?.[0];
        const endIntegerString = parsedResponse.end.match(
          /\d+/
        )?.[0];
        const multipliers = {
          second: 1 * 1e3,
          minute: 60 * 1e3,
          hour: 3600 * 1e3,
          day: 86400 * 1e3
        };
        const startMultiplier = parsedResponse.start.match(
          /second|minute|hour|day/
        )?.[0];
        const endMultiplier = parsedResponse.end.match(
          /second|minute|hour|day/
        )?.[0];
        const startInteger = startIntegerString ? parseInt(startIntegerString) : 0;
        const endInteger = endIntegerString ? parseInt(endIntegerString) : 0;
        const startTime = startInteger * multipliers[startMultiplier];
        console.log("startTime", startTime);
        const endTime = endInteger * multipliers[endMultiplier];
        console.log("endTime", endTime);
        parsedResponse.start = Date.now() - startTime;
        parsedResponse.end = Date.now() - endTime;
        return parsedResponse;
      }
    }
  }
};
var summarizeAction2 = {
  name: "SUMMARIZE_CONVERSATION",
  similes: [
    "RECAP",
    "RECAP_CONVERSATION",
    "SUMMARIZE_CHAT",
    "SUMMARIZATION",
    "CHAT_SUMMARY",
    "CONVERSATION_SUMMARY"
  ],
  description: "Summarizes the conversation and attachments.",
  validate: async (runtime, message, _state) => {
    if (message.content.source !== "discord") {
      return false;
    }
    const keywords = [
      "summarize",
      "summarization",
      "summary",
      "recap",
      "report",
      "overview",
      "review",
      "rundown",
      "wrap-up",
      "brief",
      "debrief",
      "abstract",
      "synopsis",
      "outline",
      "digest",
      "abridgment",
      "condensation",
      "encapsulation",
      "essence",
      "gist",
      "main points",
      "key points",
      "key takeaways",
      "bulletpoint",
      "highlights",
      "tldr",
      "tl;dr",
      "in a nutshell",
      "bottom line",
      "long story short",
      "sum up",
      "sum it up",
      "short version",
      "bring me up to speed",
      "catch me up"
    ];
    return keywords.some(
      (keyword) => message.content.text.toLowerCase().includes(keyword.toLowerCase())
    );
  },
  handler: async (runtime, message, state, options, callback) => {
    state = await runtime.composeState(message);
    const callbackData = {
      text: "",
      // fill in later
      action: "SUMMARIZATION_RESPONSE",
      source: message.content.source,
      attachments: []
    };
    const { roomId } = message;
    const dateRange = await getDateRange(runtime, message, state);
    if (!dateRange) {
      console.error("Couldn't get date range from message");
      return;
    }
    console.log("dateRange", dateRange);
    const { objective, start, end } = dateRange;
    const memories = await runtime.messageManager.getMemories({
      roomId,
      // subtract start from current time
      start: parseInt(start),
      end: parseInt(end),
      count: 1e4,
      unique: false
    });
    const actors = await getActorDetails({
      runtime,
      roomId
    });
    const actorMap = new Map(actors.map((actor) => [actor.id, actor]));
    const formattedMemories = memories.map((memory) => {
      const attachments = memory.content.attachments?.map((attachment) => {
        return `---
Attachment: ${attachment.id}
${attachment.description}
${attachment.text}
---`;
      }).join("\n");
      return `${actorMap.get(memory.userId)?.name ?? "Unknown User"} (${actorMap.get(memory.userId)?.username ?? ""}): ${memory.content.text}
${attachments}`;
    }).join("\n");
    let currentSummary = "";
    const model = models2[runtime.character.settings.model];
    const chunkSize = model.settings.maxContextLength - 1e3;
    const chunks = await splitChunks(formattedMemories, chunkSize, 0);
    const _datestr = (/* @__PURE__ */ new Date()).toUTCString().replace(/:/g, "-");
    state.memoriesWithAttachments = formattedMemories;
    state.objective = objective;
    for (let i = 0; i < chunks.length; i++) {
      const chunk = chunks[i];
      state.currentSummary = currentSummary;
      state.currentChunk = chunk;
      const context = composeContext4({
        state,
        // make sure it fits, we can pad the tokens a bit
        template: trimTokens2(
          summarizationTemplate2,
          chunkSize + 500,
          "gpt-4o-mini"
        )
      });
      const summary = await generateText4({
        runtime,
        context,
        modelClass: ModelClass4.SMALL
      });
      currentSummary = currentSummary + "\n" + summary;
    }
    if (!currentSummary) {
      console.error("No summary found, that's not good!");
      return;
    }
    callbackData.text = currentSummary.trim();
    if (callbackData.text && (currentSummary.trim()?.split("\n").length < 4 || currentSummary.trim()?.split(" ").length < 100)) {
      callbackData.text = `Here is the summary:
\`\`\`md
${currentSummary.trim()}
\`\`\`
`;
      await callback(callbackData);
    } else if (currentSummary.trim()) {
      const summaryFilename = `content/conversation_summary_${Date.now()}`;
      await runtime.cacheManager.set(summaryFilename, currentSummary);
      await callback(
        {
          ...callbackData,
          text: `I've attached the summary of the conversation from \`${new Date(parseInt(start)).toString()}\` to \`${new Date(parseInt(end)).toString()}\` as a text file.`
        },
        [summaryFilename]
      );
    } else {
      console.warn(
        "Empty response from summarize conversation action, skipping"
      );
    }
    return callbackData;
  },
  examples: [
    [
      {
        user: "{{user1}}",
        content: {
          text: "```js\nconst x = 10\n```"
        }
      },
      {
        user: "{{user1}}",
        content: {
          text: "can you give me a detailed report on what we're talking about?"
        }
      },
      {
        user: "{{user2}}",
        content: {
          text: "sure, no problem, give me a minute to get that together for you",
          action: "SUMMARIZE"
        }
      }
    ],
    [
      {
        user: "{{user1}}",
        content: {
          text: "please summarize the conversation we just had and include this blogpost i'm linking (Attachment: b3e12)"
        }
      },
      {
        user: "{{user2}}",
        content: {
          text: "sure, give me a sec",
          action: "SUMMARIZE"
        }
      }
    ],
    [
      {
        user: "{{user1}}",
        content: {
          text: "Can you summarize what moon and avf are talking about?"
        }
      },
      {
        user: "{{user2}}",
        content: {
          text: "Yeah, just hold on a second while I get that together for you...",
          action: "SUMMARIZE"
        }
      }
    ],
    [
      {
        user: "{{user1}}",
        content: {
          text: "i need to write a blog post about farming, can you summarize the discussion from a few hours ago?"
        }
      },
      {
        user: "{{user2}}",
        content: {
          text: "no probblem, give me a few minutes to read through everything",
          action: "SUMMARIZE"
        }
      }
    ]
  ]
};
var summarize_conversation_default = summarizeAction2;

// src/actions/transcribe_media.ts
import { composeContext as composeContext5 } from "@ai16z/eliza";
import { generateText as generateText5 } from "@ai16z/eliza";
import { parseJSONObjectFromText as parseJSONObjectFromText4 } from "@ai16z/eliza";
import {
  ModelClass as ModelClass5
} from "@ai16z/eliza";
var mediaAttachmentIdTemplate = `# Messages we are transcribing
{{recentMessages}}

# Instructions: {{senderName}} is requesting a transcription of a specific media file (audio or video). Your goal is to determine the ID of the attachment they want transcribed.
The "attachmentId" is the ID of the media file attachment that the user wants transcribed. If not specified, return null.

Your response must be formatted as a JSON block with this structure:
\`\`\`json
{
  "attachmentId": "<Attachment ID>"
}
\`\`\`
`;
var getMediaAttachmentId = async (runtime, message, state) => {
  state = await runtime.composeState(message);
  const context = composeContext5({
    state,
    template: mediaAttachmentIdTemplate
  });
  for (let i = 0; i < 5; i++) {
    const response = await generateText5({
      runtime,
      context,
      modelClass: ModelClass5.SMALL
    });
    console.log("response", response);
    const parsedResponse = parseJSONObjectFromText4(response);
    if (parsedResponse?.attachmentId) {
      return parsedResponse.attachmentId;
    }
  }
  return null;
};
var transcribeMediaAction = {
  name: "TRANSCRIBE_MEDIA",
  similes: [
    "TRANSCRIBE_AUDIO",
    "TRANSCRIBE_VIDEO",
    "MEDIA_TRANSCRIPT",
    "VIDEO_TRANSCRIPT",
    "AUDIO_TRANSCRIPT"
  ],
  description: "Transcribe the full text of an audio or video file that the user has attached.",
  validate: async (_runtime, message, _state) => {
    if (message.content.source !== "discord") {
      return false;
    }
    const keywords = [
      "transcribe",
      "transcript",
      "audio",
      "video",
      "media",
      "youtube",
      "meeting",
      "recording",
      "podcast",
      "call",
      "conference",
      "interview",
      "speech",
      "lecture",
      "presentation"
    ];
    return keywords.some(
      (keyword) => message.content.text.toLowerCase().includes(keyword.toLowerCase())
    );
  },
  handler: async (runtime, message, state, options, callback) => {
    state = await runtime.composeState(message);
    const callbackData = {
      text: "",
      // fill in later
      action: "TRANSCRIBE_MEDIA_RESPONSE",
      source: message.content.source,
      attachments: []
    };
    const attachmentId = await getMediaAttachmentId(
      runtime,
      message,
      state
    );
    if (!attachmentId) {
      console.error("Couldn't get media attachment ID from message");
      return;
    }
    const attachment = state.recentMessagesData.filter(
      (msg) => msg.content.attachments && msg.content.attachments.length > 0
    ).flatMap((msg) => msg.content.attachments).find(
      (attachment2) => attachment2.id.toLowerCase() === attachmentId.toLowerCase()
    );
    if (!attachment) {
      console.error(`Couldn't find attachment with ID ${attachmentId}`);
      return;
    }
    const mediaTranscript = attachment.text;
    callbackData.text = mediaTranscript.trim();
    if (callbackData.text && (callbackData.text?.split("\n").length < 4 || callbackData.text?.split(" ").length < 100)) {
      callbackData.text = `Here is the transcript:
\`\`\`md
${mediaTranscript.trim()}
\`\`\`
`;
      await callback(callbackData);
    } else if (callbackData.text) {
      const transcriptFilename = `content/transcript_${Date.now()}`;
      await runtime.cacheManager.set(
        transcriptFilename,
        callbackData.text
      );
      await callback(
        {
          ...callbackData,
          text: `I've attached the transcript as a text file.`
        },
        [transcriptFilename]
      );
    } else {
      console.warn(
        "Empty response from transcribe media action, skipping"
      );
    }
    return callbackData;
  },
  examples: [
    [
      {
        user: "{{user1}}",
        content: {
          text: "Please transcribe the audio file I just sent."
        }
      },
      {
        user: "{{user2}}",
        content: {
          text: "Sure, I'll transcribe the full audio for you.",
          action: "TRANSCRIBE_MEDIA"
        }
      }
    ],
    [
      {
        user: "{{user1}}",
        content: {
          text: "Can I get a transcript of that video recording?"
        }
      },
      {
        user: "{{user2}}",
        content: {
          text: "Absolutely, give me a moment to generate the full transcript of the video.",
          action: "TRANSCRIBE_MEDIA"
        }
      }
    ]
  ]
};
var transcribe_media_default = transcribeMediaAction;

// src/messages.ts
import { composeContext as composeContext6 } from "@ai16z/eliza";
import { generateMessageResponse, generateShouldRespond } from "@ai16z/eliza";
import {
  ModelClass as ModelClass8,
  ServiceType as ServiceType3
} from "@ai16z/eliza";
import { stringToUuid, getEmbeddingZeroVector } from "@ai16z/eliza";
import {
  ChannelType as ChannelType4
} from "discord.js";
import { elizaLogger as elizaLogger2 } from "@ai16z/eliza";

// src/attachments.ts
import { generateText as generateText6, trimTokens as trimTokens3 } from "@ai16z/eliza";
import { parseJSONObjectFromText as parseJSONObjectFromText5 } from "@ai16z/eliza";
import {
  ModelClass as ModelClass6,
  ServiceType as ServiceType2
} from "@ai16z/eliza";
import { Collection } from "discord.js";
import ffmpeg from "fluent-ffmpeg";
import fs from "fs";
async function generateSummary(runtime, text) {
  text = trimTokens3(text, 1e5, "gpt-4o-mini");
  const prompt = `Please generate a concise summary for the following text:
  
  Text: """
  ${text}
  """
  
  Respond with a JSON object in the following format:
  \`\`\`json
  {
    "title": "Generated Title",
    "summary": "Generated summary and/or description of the text"
  }
  \`\`\``;
  const response = await generateText6({
    runtime,
    context: prompt,
    modelClass: ModelClass6.SMALL
  });
  const parsedResponse = parseJSONObjectFromText5(response);
  if (parsedResponse) {
    return {
      title: parsedResponse.title,
      description: parsedResponse.summary
    };
  }
  return {
    title: "",
    description: ""
  };
}
var AttachmentManager = class {
  attachmentCache = /* @__PURE__ */ new Map();
  runtime;
  constructor(runtime) {
    this.runtime = runtime;
  }
  async processAttachments(attachments) {
    const processedAttachments = [];
    const attachmentCollection = attachments instanceof Collection ? attachments : new Collection(attachments.map((att) => [att.id, att]));
    for (const [, attachment] of attachmentCollection) {
      const media = await this.processAttachment(attachment);
      if (media) {
        processedAttachments.push(media);
      }
    }
    return processedAttachments;
  }
  async processAttachment(attachment) {
    if (this.attachmentCache.has(attachment.url)) {
      return this.attachmentCache.get(attachment.url);
    }
    let media = null;
    if (attachment.contentType?.startsWith("application/pdf")) {
      media = await this.processPdfAttachment(attachment);
    } else if (attachment.contentType?.startsWith("text/plain")) {
      media = await this.processPlaintextAttachment(attachment);
    } else if (attachment.contentType?.startsWith("audio/") || attachment.contentType?.startsWith("video/mp4")) {
      media = await this.processAudioVideoAttachment(attachment);
    } else if (attachment.contentType?.startsWith("image/")) {
      media = await this.processImageAttachment(attachment);
    } else if (attachment.contentType?.startsWith("video/") || this.runtime.getService(ServiceType2.VIDEO).isVideoUrl(attachment.url)) {
      media = await this.processVideoAttachment(attachment);
    } else {
      media = await this.processGenericAttachment(attachment);
    }
    if (media) {
      this.attachmentCache.set(attachment.url, media);
    }
    return media;
  }
  async processAudioVideoAttachment(attachment) {
    try {
      const response = await fetch(attachment.url);
      const audioVideoArrayBuffer = await response.arrayBuffer();
      let audioBuffer;
      if (attachment.contentType?.startsWith("audio/")) {
        audioBuffer = Buffer.from(audioVideoArrayBuffer);
      } else if (attachment.contentType?.startsWith("video/mp4")) {
        audioBuffer = await this.extractAudioFromMP4(
          audioVideoArrayBuffer
        );
      } else {
        throw new Error("Unsupported audio/video format");
      }
      const transcriptionService = this.runtime.getService(
        ServiceType2.TRANSCRIPTION
      );
      if (!transcriptionService) {
        throw new Error("Transcription service not found");
      }
      const transcription = await transcriptionService.transcribeAttachment(audioBuffer);
      const { title, description } = await generateSummary(
        this.runtime,
        transcription
      );
      return {
        id: attachment.id,
        url: attachment.url,
        title: title || "Audio/Video Attachment",
        source: attachment.contentType?.startsWith("audio/") ? "Audio" : "Video",
        description: description || "User-uploaded audio/video attachment which has been transcribed",
        text: transcription || "Audio/video content not available"
      };
    } catch (error) {
      console.error(
        `Error processing audio/video attachment: ${error.message}`
      );
      return {
        id: attachment.id,
        url: attachment.url,
        title: "Audio/Video Attachment",
        source: attachment.contentType?.startsWith("audio/") ? "Audio" : "Video",
        description: "An audio/video attachment (transcription failed)",
        text: `This is an audio/video attachment. File name: ${attachment.name}, Size: ${attachment.size} bytes, Content type: ${attachment.contentType}`
      };
    }
  }
  async extractAudioFromMP4(mp4Data) {
    const tempMP4File = `temp_${Date.now()}.mp4`;
    const tempAudioFile = `temp_${Date.now()}.mp3`;
    try {
      fs.writeFileSync(tempMP4File, Buffer.from(mp4Data));
      await new Promise((resolve, reject) => {
        ffmpeg(tempMP4File).outputOptions("-vn").audioCodec("libmp3lame").save(tempAudioFile).on("end", () => {
          resolve();
        }).on("error", (err) => {
          reject(err);
        }).run();
      });
      const audioData = fs.readFileSync(tempAudioFile);
      return audioData;
    } finally {
      if (fs.existsSync(tempMP4File)) {
        fs.unlinkSync(tempMP4File);
      }
      if (fs.existsSync(tempAudioFile)) {
        fs.unlinkSync(tempAudioFile);
      }
    }
  }
  async processPdfAttachment(attachment) {
    try {
      const response = await fetch(attachment.url);
      const pdfBuffer = await response.arrayBuffer();
      const text = await this.runtime.getService(ServiceType2.PDF).convertPdfToText(Buffer.from(pdfBuffer));
      const { title, description } = await generateSummary(
        this.runtime,
        text
      );
      return {
        id: attachment.id,
        url: attachment.url,
        title: title || "PDF Attachment",
        source: "PDF",
        description: description || "A PDF document",
        text
      };
    } catch (error) {
      console.error(`Error processing PDF attachment: ${error.message}`);
      return {
        id: attachment.id,
        url: attachment.url,
        title: "PDF Attachment (conversion failed)",
        source: "PDF",
        description: "A PDF document that could not be converted to text",
        text: `This is a PDF attachment. File name: ${attachment.name}, Size: ${attachment.size} bytes`
      };
    }
  }
  async processPlaintextAttachment(attachment) {
    try {
      const response = await fetch(attachment.url);
      const text = await response.text();
      const { title, description } = await generateSummary(
        this.runtime,
        text
      );
      return {
        id: attachment.id,
        url: attachment.url,
        title: title || "Plaintext Attachment",
        source: "Plaintext",
        description: description || "A plaintext document",
        text
      };
    } catch (error) {
      console.error(
        `Error processing plaintext attachment: ${error.message}`
      );
      return {
        id: attachment.id,
        url: attachment.url,
        title: "Plaintext Attachment (retrieval failed)",
        source: "Plaintext",
        description: "A plaintext document that could not be retrieved",
        text: `This is a plaintext attachment. File name: ${attachment.name}, Size: ${attachment.size} bytes`
      };
    }
  }
  async processImageAttachment(attachment) {
    try {
      const { description, title } = await this.runtime.getService(
        ServiceType2.IMAGE_DESCRIPTION
      ).describeImage(attachment.url);
      return {
        id: attachment.id,
        url: attachment.url,
        title: title || "Image Attachment",
        source: "Image",
        description: description || "An image attachment",
        text: description || "Image content not available"
      };
    } catch (error) {
      console.error(
        `Error processing image attachment: ${error.message}`
      );
      return this.createFallbackImageMedia(attachment);
    }
  }
  createFallbackImageMedia(attachment) {
    return {
      id: attachment.id,
      url: attachment.url,
      title: "Image Attachment",
      source: "Image",
      description: "An image attachment (recognition failed)",
      text: `This is an image attachment. File name: ${attachment.name}, Size: ${attachment.size} bytes, Content type: ${attachment.contentType}`
    };
  }
  async processVideoAttachment(attachment) {
    const videoService = this.runtime.getService(
      ServiceType2.VIDEO
    );
    if (!videoService) {
      throw new Error("Video service not found");
    }
    if (videoService.isVideoUrl(attachment.url)) {
      const videoInfo = await videoService.processVideo(
        attachment.url,
        this.runtime
      );
      return {
        id: attachment.id,
        url: attachment.url,
        title: videoInfo.title,
        source: "YouTube",
        description: videoInfo.description,
        text: videoInfo.text
      };
    } else {
      return {
        id: attachment.id,
        url: attachment.url,
        title: "Video Attachment",
        source: "Video",
        description: "A video attachment",
        text: "Video content not available"
      };
    }
  }
  async processGenericAttachment(attachment) {
    return {
      id: attachment.id,
      url: attachment.url,
      title: "Generic Attachment",
      source: "Generic",
      description: "A generic attachment",
      text: "Attachment content not available"
    };
  }
};

// src/templates.ts
import { messageCompletionFooter, shouldRespondFooter } from "@ai16z/eliza";
var discordShouldRespondTemplate = `# Task: Decide if {{agentName}} should respond.
About {{agentName}}:
{{bio}}

# INSTRUCTIONS: Determine if {{agentName}} should respond to the message and participate in the conversation. Do not comment. Just respond with "RESPOND" or "IGNORE" or "STOP".

# RESPONSE EXAMPLES
<user 1>: I just saw a really great movie
<user 2>: Oh? Which movie?
Result: [IGNORE]

{{agentName}}: Oh, this is my favorite scene
<user 1>: sick
<user 2>: wait, why is it your favorite scene
Result: [RESPOND]

<user>: stfu bot
Result: [STOP]

<user>: Hey {{agent}}, can you help me with something
Result: [RESPOND]

<user>: {{agentName}} stfu plz
Result: [STOP]

<user>: i need help
{{agentName}}: how can I help you?
<user>: no. i need help from someone else
Result: [IGNORE]

<user>: Hey {{agent}}, can I ask you a question
{{agentName}}: Sure, what is it
<user>: can you ask claude to create a basic react module that demonstrates a counter
Result: [RESPOND]

<user>: {{agentName}} can you tell me a story
<user>: {about a girl named elara
{{agentName}}: Sure.
{{agentName}}: Once upon a time, in a quaint little village, there was a curious girl named Elara.
{{agentName}}: Elara was known for her adventurous spirit and her knack for finding beauty in the mundane.
<user>: I'm loving it, keep going
Result: [RESPOND]

<user>: {{agentName}} stop responding plz
Result: [STOP]

<user>: okay, i want to test something. can you say marco?
{{agentName}}: marco
<user>: great. okay, now do it again
Result: [RESPOND]

Response options are [RESPOND], [IGNORE] and [STOP].

{{agentName}} is in a room with other users and is very worried about being annoying and saying too much.
Respond with [RESPOND] to messages that are directed at {{agentName}}, or participate in conversations that are interesting or relevant to their background.
If a message is not interesting or relevant, respond with [IGNORE]
Unless directly responding to a user, respond with [IGNORE] to messages that are very short or do not contain much information.
If a user asks {{agentName}} to be quiet, respond with [STOP]
If {{agentName}} concludes a conversation and isn't part of the conversation anymore, respond with [STOP]

IMPORTANT: {{agentName}} is particularly sensitive about being annoying, so if there is any doubt, it is better to respond with [IGNORE].
If {{agentName}} is conversing with a user and they have not asked to stop, it is better to respond with [RESPOND].

{{recentMessages}}

# INSTRUCTIONS: Choose the option that best describes {{agentName}}'s response to the last message. Ignore messages if they are addressed to someone else.
` + shouldRespondFooter;
var discordVoiceHandlerTemplate = `# Task: Generate conversational voice dialog for {{agentName}}.
About {{agentName}}:
{{bio}}

# Attachments
{{attachments}}

# Capabilities
Note that {{agentName}} is capable of reading/seeing/hearing various forms of media, including images, videos, audio, plaintext and PDFs. Recent attachments have been included above under the "Attachments" section.

{{actions}}

{{messageDirections}}

{{recentMessages}}

# Instructions: Write the next message for {{agentName}}. Include an optional action if appropriate. {{actionNames}}
` + messageCompletionFooter;
var discordMessageHandlerTemplate = (
  // {{goals}}
  `# Action Examples
{{actionExamples}}
(Action examples are for reference only. Do not use the information from them in your response.)

# Knowledge
{{knowledge}}

# Task: Generate dialog and actions for the character {{agentName}}.
About {{agentName}}:
{{bio}}
{{lore}}

Examples of {{agentName}}'s dialog and actions:
{{characterMessageExamples}}

{{providers}}

{{attachments}}

{{actions}}

# Capabilities
Note that {{agentName}} is capable of reading/seeing/hearing various forms of media, including images, videos, audio, plaintext and PDFs. Recent attachments have been included above under the "Attachments" section.

{{messageDirections}}

{{recentMessages}}

# Instructions: Write the next message for {{agentName}}. Include an action, if appropriate. {{actionNames}}
` + messageCompletionFooter
);

// src/utils.ts
import {
  ModelClass as ModelClass7,
  elizaLogger,
  generateText as generateText7,
  trimTokens as trimTokens4,
  parseJSONObjectFromText as parseJSONObjectFromText6
} from "@ai16z/eliza";
import {
  ChannelType as ChannelType3,
  PermissionsBitField,
  ThreadChannel
} from "discord.js";
function getWavHeader(audioLength, sampleRate, channelCount = 1, bitsPerSample = 16) {
  const wavHeader = Buffer.alloc(44);
  wavHeader.write("RIFF", 0);
  wavHeader.writeUInt32LE(36 + audioLength, 4);
  wavHeader.write("WAVE", 8);
  wavHeader.write("fmt ", 12);
  wavHeader.writeUInt32LE(16, 16);
  wavHeader.writeUInt16LE(1, 20);
  wavHeader.writeUInt16LE(channelCount, 22);
  wavHeader.writeUInt32LE(sampleRate, 24);
  wavHeader.writeUInt32LE(
    sampleRate * bitsPerSample * channelCount / 8,
    28
  );
  wavHeader.writeUInt16LE(bitsPerSample * channelCount / 8, 32);
  wavHeader.writeUInt16LE(bitsPerSample, 34);
  wavHeader.write("data", 36);
  wavHeader.writeUInt32LE(audioLength, 40);
  return wavHeader;
}
var MAX_MESSAGE_LENGTH = 1900;
async function sendMessageInChunks(channel, content, inReplyTo, files) {
  const sentMessages = [];
  const messages = splitMessage(content);
  try {
    for (let i = 0; i < messages.length; i++) {
      const message = messages[i];
      if (message.trim().length > 0 || i === messages.length - 1 && files && files.length > 0) {
        const options = {
          content: message.trim()
        };
        if (i === messages.length - 1 && files && files.length > 0) {
          options.files = files;
        }
        const m = await channel.send(options);
        sentMessages.push(m);
      }
    }
  } catch (error) {
    elizaLogger.error("Error sending message:", error);
  }
  return sentMessages;
}
function splitMessage(content) {
  const messages = [];
  let currentMessage = "";
  const rawLines = content?.split("\n") || [];
  const lines = rawLines.map((line) => {
    const chunks = [];
    while (line.length > MAX_MESSAGE_LENGTH) {
      chunks.push(line.slice(0, MAX_MESSAGE_LENGTH));
      line = line.slice(MAX_MESSAGE_LENGTH);
    }
    chunks.push(line);
    return chunks;
  }).flat();
  for (const line of lines) {
    if (currentMessage.length + line.length + 1 > MAX_MESSAGE_LENGTH) {
      messages.push(currentMessage.trim());
      currentMessage = "";
    }
    currentMessage += line + "\n";
  }
  if (currentMessage.trim().length > 0) {
    messages.push(currentMessage.trim());
  }
  return messages;
}
function canSendMessage(channel) {
  if (!channel) {
    return {
      canSend: false,
      reason: "No channel given"
    };
  }
  if (channel.type === ChannelType3.DM) {
    return {
      canSend: true,
      reason: null
    };
  }
  const botMember = channel.guild?.members.cache.get(channel.client.user.id);
  if (!botMember) {
    return {
      canSend: false,
      reason: "Not a guild channel or bot member not found"
    };
  }
  const requiredPermissions = [
    PermissionsBitField.Flags.ViewChannel,
    PermissionsBitField.Flags.SendMessages,
    PermissionsBitField.Flags.ReadMessageHistory
  ];
  if (channel instanceof ThreadChannel) {
    requiredPermissions.push(
      PermissionsBitField.Flags.SendMessagesInThreads
    );
  }
  const permissions = channel.permissionsFor(botMember);
  if (!permissions) {
    return {
      canSend: false,
      reason: "Could not retrieve permissions"
    };
  }
  const missingPermissions = requiredPermissions.filter(
    (perm) => !permissions.has(perm)
  );
  return {
    canSend: missingPermissions.length === 0,
    missingPermissions,
    reason: missingPermissions.length > 0 ? `Missing permissions: ${missingPermissions.map((p) => String(p)).join(", ")}` : null
  };
}

// src/messages.ts
var MessageManager = class {
  client;
  runtime;
  attachmentManager;
  interestChannels = {};
  discordClient;
  voiceManager;
  constructor(discordClient, voiceManager) {
    this.client = discordClient.client;
    this.voiceManager = voiceManager;
    this.discordClient = discordClient;
    this.runtime = discordClient.runtime;
    this.attachmentManager = new AttachmentManager(this.runtime);
  }
  async handleMessage(message) {
    if (message.interaction || message.author.id === this.client.user?.id)
      return;
    if (this.runtime.character.clientConfig?.discord?.shouldIgnoreBotMessages && message.author?.bot) {
      return;
    }
    if (this.runtime.character.clientConfig?.discord?.shouldIgnoreDirectMessages && message.channel.type === ChannelType4.DM) {
      return;
    }
    const userId = message.author.id;
    const userName = message.author.username;
    const name = message.author.displayName;
    const channelId = message.channel.id;
    try {
      const { processedContent, attachments } = await this.processMessageMedia(message);
      const audioAttachments = message.attachments.filter(
        (attachment) => attachment.contentType?.startsWith("audio/")
      );
      if (audioAttachments.size > 0) {
        const processedAudioAttachments = await this.attachmentManager.processAttachments(
          audioAttachments
        );
        attachments.push(...processedAudioAttachments);
      }
      const roomId = stringToUuid(channelId + "-" + this.runtime.agentId);
      const userIdUUID = stringToUuid(userId);
      await this.runtime.ensureConnection(
        userIdUUID,
        roomId,
        userName,
        name,
        "discord"
      );
      const messageId = stringToUuid(
        message.id + "-" + this.runtime.agentId
      );
      let shouldIgnore = false;
      let shouldRespond = true;
      const content = {
        text: processedContent,
        attachments,
        source: "discord",
        url: message.url,
        inReplyTo: message.reference?.messageId ? stringToUuid(
          message.reference.messageId + "-" + this.runtime.agentId
        ) : void 0
      };
      const userMessage = {
        content,
        userId: userIdUUID,
        agentId: this.runtime.agentId,
        roomId
      };
      const memory = {
        id: stringToUuid(message.id + "-" + this.runtime.agentId),
        ...userMessage,
        userId: userIdUUID,
        agentId: this.runtime.agentId,
        roomId,
        content,
        createdAt: message.createdTimestamp
      };
      if (content.text) {
        await this.runtime.messageManager.addEmbeddingToMemory(memory);
        await this.runtime.messageManager.createMemory(memory);
      }
      let state = await this.runtime.composeState(userMessage, {
        discordClient: this.client,
        discordMessage: message,
        agentName: this.runtime.character.name || this.client.user?.displayName
      });
      const canSendResult = canSendMessage(message.channel);
      if (!canSendResult.canSend) {
        return elizaLogger2.warn(
          `Cannot send message to channel ${message.channel}`,
          canSendResult
        );
      }
      if (!shouldIgnore) {
        shouldIgnore = await this._shouldIgnore(message);
      }
      if (shouldIgnore) {
        return;
      }
      const hasInterest = this._checkInterest(channelId);
      const agentUserState = await this.runtime.databaseAdapter.getParticipantUserState(
        roomId,
        this.runtime.agentId
      );
      if (agentUserState === "MUTED" && !message.mentions.has(this.client.user.id) && !hasInterest) {
        console.log("Ignoring muted room");
        return;
      }
      if (agentUserState === "FOLLOWED") {
        shouldRespond = true;
      } else if (!shouldRespond && hasInterest || shouldRespond && !hasInterest) {
        shouldRespond = await this._shouldRespond(message, state);
      }
      if (shouldRespond) {
        const context = composeContext6({
          state,
          template: this.runtime.character.templates?.discordMessageHandlerTemplate || discordMessageHandlerTemplate
        });
        const responseContent = await this._generateResponse(
          memory,
          state,
          context
        );
        responseContent.text = responseContent.text?.trim();
        responseContent.inReplyTo = stringToUuid(
          message.id + "-" + this.runtime.agentId
        );
        if (!responseContent.text) {
          return;
        }
        const callback = async (content2, files) => {
          try {
            if (message.id && !content2.inReplyTo) {
              content2.inReplyTo = stringToUuid(
                message.id + "-" + this.runtime.agentId
              );
            }
            const messages = await sendMessageInChunks(
              message.channel,
              content2.text,
              message.id,
              files
            );
            const memories = [];
            for (const m of messages) {
              let action = content2.action;
              if (messages.length > 1 && m !== messages[messages.length - 1]) {
                action = "CONTINUE";
              }
              const memory2 = {
                id: stringToUuid(
                  m.id + "-" + this.runtime.agentId
                ),
                userId: this.runtime.agentId,
                agentId: this.runtime.agentId,
                content: {
                  ...content2,
                  action,
                  inReplyTo: messageId,
                  url: m.url
                },
                roomId,
                embedding: getEmbeddingZeroVector(),
                createdAt: m.createdTimestamp
              };
              memories.push(memory2);
            }
            for (const m of memories) {
              await this.runtime.messageManager.createMemory(m);
            }
            return memories;
          } catch (error) {
            console.error("Error sending message:", error);
            return [];
          }
        };
        const responseMessages = await callback(responseContent);
        state = await this.runtime.updateRecentMessageState(state);
        await this.runtime.processActions(
          memory,
          responseMessages,
          state,
          callback
        );
      }
      await this.runtime.evaluate(memory, state, shouldRespond);
    } catch (error) {
      console.error("Error handling message:", error);
      if (message.channel.type === ChannelType4.GuildVoice) {
        const errorMessage = "Sorry, I had a glitch. What was that?";
        const speechService = this.runtime.getService(
          ServiceType3.SPEECH_GENERATION
        );
        if (!speechService) {
          throw new Error("Speech generation service not found");
        }
        const audioStream = await speechService.generate(
          this.runtime,
          errorMessage
        );
        await this.voiceManager.playAudioStream(userId, audioStream);
      } else {
        console.error("Error sending message:", error);
      }
    }
  }
  async cacheMessages(channel, count = 20) {
    const messages = await channel.messages.fetch({ limit: count });
    for (const [_, message] of messages) {
      await this.handleMessage(message);
    }
  }
  async processMessageMedia(message) {
    let processedContent = message.content;
    let attachments = [];
    const codeBlockRegex = /```([\s\S]*?)```/g;
    let match;
    while (match = codeBlockRegex.exec(processedContent)) {
      const codeBlock = match[1];
      const lines = codeBlock.split("\n");
      const title = lines[0];
      const description = lines.slice(0, 3).join("\n");
      const attachmentId = `code-${Date.now()}-${Math.floor(Math.random() * 1e3)}`.slice(
        -5
      );
      attachments.push({
        id: attachmentId,
        url: "",
        title: title || "Code Block",
        source: "Code",
        description,
        text: codeBlock
      });
      processedContent = processedContent.replace(
        match[0],
        `Code Block (${attachmentId})`
      );
    }
    if (message.attachments.size > 0) {
      attachments = await this.attachmentManager.processAttachments(
        message.attachments
      );
    }
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const urls = processedContent.match(urlRegex) || [];
    for (const url of urls) {
      if (this.runtime.getService(ServiceType3.VIDEO)?.isVideoUrl(url)) {
        const videoService = this.runtime.getService(
          ServiceType3.VIDEO
        );
        if (!videoService) {
          throw new Error("Video service not found");
        }
        const videoInfo = await videoService.processVideo(
          url,
          this.runtime
        );
        attachments.push({
          id: `youtube-${Date.now()}`,
          url,
          title: videoInfo.title,
          source: "YouTube",
          description: videoInfo.description,
          text: videoInfo.text
        });
      } else {
        const browserService = this.runtime.getService(
          ServiceType3.BROWSER
        );
        if (!browserService) {
          throw new Error("Browser service not found");
        }
        const { title, description: summary } = await browserService.getPageContent(url, this.runtime);
        attachments.push({
          id: `webpage-${Date.now()}`,
          url,
          title: title || "Web Page",
          source: "Web",
          description: summary,
          text: summary
        });
      }
    }
    return { processedContent, attachments };
  }
  _checkInterest(channelId) {
    return !!this.interestChannels[channelId];
  }
  async _shouldIgnore(message) {
    if (message.author.id === this.client.user?.id) return true;
    let messageContent = message.content.toLowerCase();
    const botMention = `<@!?${this.client.user?.id}>`;
    messageContent = messageContent.replace(
      new RegExp(botMention, "gi"),
      this.runtime.character.name.toLowerCase()
    );
    const botUsername = this.client.user?.username.toLowerCase();
    messageContent = messageContent.replace(
      new RegExp(`\\b${botUsername}\\b`, "g"),
      this.runtime.character.name.toLowerCase()
    );
    messageContent = messageContent.replace(/[^a-zA-Z0-9\s]/g, "");
    const loseInterestWords = [
      "shut up",
      "stop",
      "please shut up",
      "shut up please",
      "dont talk",
      "silence",
      "stop talking",
      "be quiet",
      "hush",
      "wtf",
      "chill",
      "stfu",
      "stupid bot",
      "dumb bot",
      "stop responding",
      "god damn it",
      "god damn",
      "goddamnit",
      "can you not",
      "can you stop",
      "be quiet",
      "hate you",
      "hate this",
      "fuck up"
    ];
    if (messageContent.length < 100 && loseInterestWords.some((word) => messageContent.includes(word))) {
      delete this.interestChannels[message.channelId];
      return true;
    }
    if (messageContent.length < 10 && !this.interestChannels[message.channelId]) {
      return true;
    }
    const targetedPhrases = [
      this.runtime.character.name + " stop responding",
      this.runtime.character.name + " stop talking",
      this.runtime.character.name + " shut up",
      this.runtime.character.name + " stfu",
      "stop talking" + this.runtime.character.name,
      this.runtime.character.name + " stop talking",
      "shut up " + this.runtime.character.name,
      this.runtime.character.name + " shut up",
      "stfu " + this.runtime.character.name,
      this.runtime.character.name + " stfu",
      "chill" + this.runtime.character.name,
      this.runtime.character.name + " chill"
    ];
    if (targetedPhrases.some((phrase) => messageContent.includes(phrase))) {
      delete this.interestChannels[message.channelId];
      return true;
    }
    if (!this.interestChannels[message.channelId] && messageContent.length < 2) {
      return true;
    }
    const ignoreResponseWords = [
      "lol",
      "nm",
      "uh",
      "wtf",
      "stfu",
      "dumb",
      "jfc",
      "omg"
    ];
    if (message.content.length < 4 && ignoreResponseWords.some(
      (word) => message.content.toLowerCase().includes(word)
    )) {
      return true;
    }
    return false;
  }
  async _shouldRespond(message, state) {
    if (message.author.id === this.client.user?.id) return false;
    if (message.mentions.has(this.client.user?.id)) return true;
    const guild = message.guild;
    const member = guild?.members.cache.get(this.client.user?.id);
    const nickname = member?.nickname;
    if (message.content.toLowerCase().includes(this.client.user?.username.toLowerCase()) || message.content.toLowerCase().includes(this.client.user?.tag.toLowerCase()) || nickname && message.content.toLowerCase().includes(nickname.toLowerCase())) {
      return true;
    }
    if (!message.guild) {
      return true;
    }
    const shouldRespondContext = composeContext6({
      state,
      template: this.runtime.character.templates?.discordShouldRespondTemplate || this.runtime.character.templates?.shouldRespondTemplate || discordShouldRespondTemplate
    });
    const response = await generateShouldRespond({
      runtime: this.runtime,
      context: shouldRespondContext,
      modelClass: ModelClass8.SMALL
    });
    if (response === "RESPOND") {
      return true;
    } else if (response === "IGNORE") {
      return false;
    } else if (response === "STOP") {
      delete this.interestChannels[message.channelId];
      return false;
    } else {
      console.error(
        "Invalid response from response generateText:",
        response
      );
      return false;
    }
  }
  async _generateResponse(message, state, context) {
    const { userId, roomId } = message;
    const response = await generateMessageResponse({
      runtime: this.runtime,
      context,
      modelClass: ModelClass8.LARGE
    });
    if (!response) {
      console.error("No response from generateMessageResponse");
      return;
    }
    await this.runtime.databaseAdapter.log({
      body: { message, context, response },
      userId,
      roomId,
      type: "response"
    });
    return response;
  }
  async fetchBotName(botToken) {
    const url = "https://discord.com/api/v10/users/@me";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bot ${botToken}`
      }
    });
    if (!response.ok) {
      throw new Error(
        `Error fetching bot details: ${response.statusText}`
      );
    }
    const data = await response.json();
    return data.username;
  }
};

// src/providers/channelState.ts
import {
  ChannelType as ChannelType5
} from "discord.js";
var channelStateProvider = {
  get: async (runtime, message, state) => {
    const discordMessage = state?.discordMessage || state?.discordChannel;
    if (!discordMessage) {
      return "";
    }
    const guild = discordMessage?.guild;
    const agentName = state?.agentName || "The agent";
    const senderName = state?.senderName || "someone";
    if (!guild) {
      return agentName + " is currently in a direct message conversation with " + senderName;
    }
    const serverName = guild.name;
    const guildId = guild.id;
    const channel = discordMessage.channel;
    if (!channel) {
      console.log("channel is null");
      return "";
    }
    let response = agentName + " is currently having a conversation in the channel `@" + channel.id + " in the server `" + serverName + "` (@" + guildId + ")";
    if (channel.type === ChannelType5.GuildText && channel.topic) {
      response += "\nThe topic of the channel is: " + channel.topic;
    }
    return response;
  }
};
var channelState_default = channelStateProvider;

// src/providers/voiceState.ts
import { getVoiceConnection as getVoiceConnection2 } from "@discordjs/voice";
import { ChannelType as ChannelType6 } from "discord.js";
var voiceStateProvider = {
  get: async (runtime, message, state) => {
    const discordMessage = state?.discordMessage || state.discordChannel;
    const connection = getVoiceConnection2(
      discordMessage?.guild?.id
    );
    const agentName = state?.agentName || "The agent";
    if (!connection) {
      return agentName + " is not currently in a voice channel";
    }
    const channel = (state?.discordMessage || state.discordChannel)?.guild?.channels?.cache?.get(
      connection.joinConfig.channelId
    );
    if (!channel || channel.type !== ChannelType6.GuildVoice) {
      return agentName + " is in an invalid voice channel";
    }
    return `${agentName} is currently in the voice channel: ${channel.name} (ID: ${channel.id})`;
  }
};
var voiceState_default = voiceStateProvider;

// src/voice.ts
import {
  ModelClass as ModelClass9,
  ServiceType as ServiceType4,
  composeContext as composeContext7,
  elizaLogger as elizaLogger3,
  getEmbeddingZeroVector as getEmbeddingZeroVector2,
  generateMessageResponse as generateMessageResponse2,
  stringToUuid as stringToUuid2,
  generateShouldRespond as generateShouldRespond2
} from "@ai16z/eliza";
import {
  NoSubscriberBehavior,
  StreamType,
  VoiceConnectionStatus,
  createAudioPlayer,
  createAudioResource,
  getVoiceConnection as getVoiceConnection3,
  joinVoiceChannel,
  entersState
} from "@discordjs/voice";
import {
  ChannelType as ChannelType7
} from "discord.js";
import EventEmitter from "events";
import prism from "prism-media";
import { pipeline } from "stream";
var import_debounce = __toESM(require_debounce(), 1);
var DECODE_FRAME_SIZE = 1024;
var DECODE_SAMPLE_RATE = 16e3;
var AudioMonitor = class {
  readable;
  buffers = [];
  maxSize;
  lastFlagged = -1;
  ended = false;
  constructor(readable, maxSize, callback) {
    this.readable = readable;
    this.maxSize = maxSize;
    this.readable.on("data", (chunk) => {
      if (this.lastFlagged < 0) {
        this.lastFlagged = this.buffers.length;
      }
      this.buffers.push(chunk);
      const currentSize = this.buffers.reduce(
        (acc, cur) => acc + cur.length,
        0
      );
      while (currentSize > this.maxSize) {
        this.buffers.shift();
        this.lastFlagged--;
      }
    });
    this.readable.on("end", () => {
      elizaLogger3.log("AudioMonitor ended");
      this.ended = true;
      if (this.lastFlagged < 0) return;
      callback(this.getBufferFromStart());
      this.lastFlagged = -1;
    });
    this.readable.on("speakingStopped", () => {
      if (this.ended) return;
      elizaLogger3.log("Speaking stopped");
      if (this.lastFlagged < 0) return;
      callback(this.getBufferFromStart());
    });
    this.readable.on("speakingStarted", () => {
      if (this.ended) return;
      elizaLogger3.log("Speaking started");
      this.reset();
    });
  }
  stop() {
    this.readable.removeAllListeners("data");
    this.readable.removeAllListeners("end");
    this.readable.removeAllListeners("speakingStopped");
    this.readable.removeAllListeners("speakingStarted");
  }
  isFlagged() {
    return this.lastFlagged >= 0;
  }
  getBufferFromFlag() {
    if (this.lastFlagged < 0) {
      return null;
    }
    const buffer = Buffer.concat(this.buffers.slice(this.lastFlagged));
    return buffer;
  }
  getBufferFromStart() {
    const buffer = Buffer.concat(this.buffers);
    return buffer;
  }
  reset() {
    this.buffers = [];
    this.lastFlagged = -1;
  }
  isEnded() {
    return this.ended;
  }
};
var VoiceManager2 = class extends EventEmitter {
  userStates = /* @__PURE__ */ new Map();
  activeAudioPlayer = null;
  client;
  runtime;
  streams = /* @__PURE__ */ new Map();
  connections = /* @__PURE__ */ new Map();
  activeMonitors = /* @__PURE__ */ new Map();
  constructor(client) {
    super();
    this.client = client.client;
    this.runtime = client.runtime;
  }
  async handleVoiceStateUpdate(oldState, newState) {
    const oldChannelId = oldState.channelId;
    const newChannelId = newState.channelId;
    const member = newState.member;
    if (!member) return;
    if (member.id === this.client.user?.id) {
      return;
    }
    if (oldChannelId === newChannelId) {
      return;
    }
    if (oldChannelId && this.connections.has(oldChannelId)) {
      this.stopMonitoringMember(member.id);
    }
    if (newChannelId && this.connections.has(newChannelId)) {
      await this.monitorMember(
        member,
        newState.channel
      );
    }
  }
  async joinChannel(channel) {
    const oldConnection = getVoiceConnection3(channel.guildId);
    if (oldConnection) {
      try {
        oldConnection.destroy();
        this.streams.clear();
        this.activeMonitors.clear();
      } catch (error) {
        console.error("Error leaving voice channel:", error);
      }
    }
    const connection = joinVoiceChannel({
      channelId: channel.id,
      guildId: channel.guild.id,
      adapterCreator: channel.guild.voiceAdapterCreator,
      selfDeaf: false,
      selfMute: false
    });
    try {
      await Promise.race([
        entersState(connection, VoiceConnectionStatus.Ready, 2e4),
        entersState(
          connection,
          VoiceConnectionStatus.Signalling,
          2e4
        )
      ]);
      elizaLogger3.log(
        `Voice connection established in state: ${connection.state.status}`
      );
      connection.on("stateChange", async (oldState, newState) => {
        elizaLogger3.log(
          `Voice connection state changed from ${oldState.status} to ${newState.status}`
        );
        if (newState.status === VoiceConnectionStatus.Disconnected) {
          elizaLogger3.log("Handling disconnection...");
          try {
            await Promise.race([
              entersState(
                connection,
                VoiceConnectionStatus.Signalling,
                5e3
              ),
              entersState(
                connection,
                VoiceConnectionStatus.Connecting,
                5e3
              )
            ]);
            elizaLogger3.log("Reconnecting to channel...");
          } catch (e) {
            elizaLogger3.log(
              "Disconnection confirmed - cleaning up..." + e
            );
            connection.destroy();
            this.connections.delete(channel.id);
          }
        } else if (newState.status === VoiceConnectionStatus.Destroyed) {
          this.connections.delete(channel.id);
        } else if (!this.connections.has(channel.id) && (newState.status === VoiceConnectionStatus.Ready || newState.status === VoiceConnectionStatus.Signalling)) {
          this.connections.set(channel.id, connection);
        }
      });
      connection.on("error", (error) => {
        elizaLogger3.log("Voice connection error:", error);
        elizaLogger3.log(
          "Connection error - will attempt to recover..."
        );
      });
      this.connections.set(channel.id, connection);
      const me = channel.guild.members.me;
      if (me?.voice && me.permissions.has("DeafenMembers")) {
        try {
          await me.voice.setDeaf(false);
          await me.voice.setMute(false);
        } catch (error) {
          elizaLogger3.log("Failed to modify voice state:", error);
        }
      }
      connection.receiver.speaking.on("start", async (userId) => {
        let user = channel.members.get(userId);
        if (!user) {
          try {
            user = await channel.guild.members.fetch(userId);
          } catch (error) {
            console.error("Failed to fetch user:", error);
          }
        }
        if (user && !user?.user.bot) {
          this.monitorMember(user, channel);
          this.streams.get(userId)?.emit("speakingStarted");
        }
      });
      connection.receiver.speaking.on("end", async (userId) => {
        const user = channel.members.get(userId);
        if (!user?.user.bot) {
          this.streams.get(userId)?.emit("speakingStopped");
        }
      });
    } catch (error) {
      elizaLogger3.log("Failed to establish voice connection:", error);
      connection.destroy();
      this.connections.delete(channel.id);
      throw error;
    }
  }
  async monitorMember(member, channel) {
    const userId = member?.id;
    const userName = member?.user?.username;
    const name = member?.user?.displayName;
    const connection = getVoiceConnection3(member?.guild?.id);
    const receiveStream = connection?.receiver.subscribe(userId, {
      autoDestroy: true,
      emitClose: true
    });
    if (!receiveStream || receiveStream.readableLength === 0) {
      return;
    }
    const opusDecoder = new prism.opus.Decoder({
      channels: 1,
      rate: DECODE_SAMPLE_RATE,
      frameSize: DECODE_FRAME_SIZE
    });
    const volumeBuffer = [];
    const VOLUME_WINDOW_SIZE = 30;
    const SPEAKING_THRESHOLD = 0.05;
    opusDecoder.on("data", (pcmData) => {
      if (this.activeAudioPlayer) {
        const samples = new Int16Array(
          pcmData.buffer,
          pcmData.byteOffset,
          pcmData.length / 2
        );
        const maxAmplitude = Math.max(...samples.map(Math.abs)) / 32768;
        volumeBuffer.push(maxAmplitude);
        if (volumeBuffer.length > VOLUME_WINDOW_SIZE) {
          volumeBuffer.shift();
        }
        const avgVolume = volumeBuffer.reduce((sum, v) => sum + v, 0) / VOLUME_WINDOW_SIZE;
        if (avgVolume > SPEAKING_THRESHOLD) {
          volumeBuffer.length = 0;
          this.cleanupAudioPlayer(this.activeAudioPlayer);
        }
      }
    });
    pipeline(
      receiveStream,
      opusDecoder,
      (err) => {
        if (err) {
          console.log(`Opus decoding pipeline error: ${err}`);
        }
      }
    );
    this.streams.set(userId, opusDecoder);
    this.connections.set(userId, connection);
    opusDecoder.on("error", (err) => {
      console.log(`Opus decoding error: ${err}`);
    });
    const errorHandler = (err) => {
      console.log(`Opus decoding error: ${err}`);
    };
    const streamCloseHandler = () => {
      console.log(`voice stream from ${member?.displayName} closed`);
      this.streams.delete(userId);
      this.connections.delete(userId);
    };
    const closeHandler = () => {
      console.log(`Opus decoder for ${member?.displayName} closed`);
      opusDecoder.removeListener("error", errorHandler);
      opusDecoder.removeListener("close", closeHandler);
      receiveStream?.removeListener("close", streamCloseHandler);
    };
    opusDecoder.on("error", errorHandler);
    opusDecoder.on("close", closeHandler);
    receiveStream?.on("close", streamCloseHandler);
    this.client.emit(
      "userStream",
      userId,
      name,
      userName,
      channel,
      opusDecoder
    );
  }
  leaveChannel(channel) {
    const connection = this.connections.get(channel.id);
    if (connection) {
      connection.destroy();
      this.connections.delete(channel.id);
    }
    for (const [memberId, monitorInfo] of this.activeMonitors) {
      if (monitorInfo.channel.id === channel.id && memberId !== this.client.user?.id) {
        this.stopMonitoringMember(memberId);
      }
    }
    console.log(`Left voice channel: ${channel.name} (${channel.id})`);
  }
  stopMonitoringMember(memberId) {
    const monitorInfo = this.activeMonitors.get(memberId);
    if (monitorInfo) {
      monitorInfo.monitor.stop();
      this.activeMonitors.delete(memberId);
      this.streams.delete(memberId);
      console.log(`Stopped monitoring user ${memberId}`);
    }
  }
  async handleGuildCreate(guild) {
    console.log(`Joined guild ${guild.name}`);
  }
  async handleUserStream(userId, name, userName, channel, audioStream) {
    console.log(`Starting audio monitor for user: ${userId}`);
    const channelId = channel.id;
    if (!this.userStates.has(userId)) {
      this.userStates.set(userId, {
        buffers: [],
        totalLength: 0,
        lastActive: Date.now(),
        transcriptionText: ""
      });
    }
    const state = this.userStates.get(userId);
    const DEBOUNCE_TRANSCRIPTION_THRESHOLD = 2500;
    const debouncedProcessTranscription = (0, import_debounce.default)(async () => {
      await this.processTranscription(
        userId,
        channelId,
        channel,
        name,
        userName
      );
    }, DEBOUNCE_TRANSCRIPTION_THRESHOLD);
    const processBuffer = async (buffer) => {
      try {
        state.buffers.push(buffer);
        state.totalLength += buffer.length;
        state.lastActive = Date.now();
        debouncedProcessTranscription();
      } catch (error) {
        console.error(
          `Error processing buffer for user ${userId}:`,
          error
        );
      }
    };
    new AudioMonitor(audioStream, 1e7, async (buffer) => {
      if (!buffer) {
        console.error("Received empty buffer");
        return;
      }
      await processBuffer(buffer);
    });
  }
  async processTranscription(userId, channelId, channel, name, userName) {
    const state = this.userStates.get(userId);
    if (!state || state.buffers.length === 0) return;
    try {
      let isValidTranscription = function(text) {
        if (!text || text.includes("[BLANK_AUDIO]")) return false;
        return true;
      };
      const inputBuffer = Buffer.concat(state.buffers, state.totalLength);
      state.buffers.length = 0;
      state.totalLength = 0;
      const wavBuffer = await this.convertOpusToWav(inputBuffer);
      console.log("Starting transcription...");
      const transcriptionText = await this.runtime.getService(ServiceType4.TRANSCRIPTION).transcribe(wavBuffer);
      if (transcriptionText && isValidTranscription(transcriptionText)) {
        state.transcriptionText += transcriptionText;
      }
      if (state.transcriptionText.length) {
        this.cleanupAudioPlayer(this.activeAudioPlayer);
        const finalText = state.transcriptionText;
        state.transcriptionText = "";
        await this.handleUserMessage(
          finalText,
          userId,
          channelId,
          channel,
          name,
          userName
        );
      }
    } catch (error) {
      console.error(
        `Error transcribing audio for user ${userId}:`,
        error
      );
    }
  }
  async handleUserMessage(message, userId, channelId, channel, name, userName) {
    try {
      const roomId = stringToUuid2(channelId + "-" + this.runtime.agentId);
      const userIdUUID = stringToUuid2(userId);
      await this.runtime.ensureConnection(
        userIdUUID,
        roomId,
        userName,
        name,
        "discord"
      );
      let state = await this.runtime.composeState(
        {
          agentId: this.runtime.agentId,
          content: { text: message, source: "Discord" },
          userId: userIdUUID,
          roomId
        },
        {
          discordChannel: channel,
          discordClient: this.client,
          agentName: this.runtime.character.name
        }
      );
      if (message && message.startsWith("/")) {
        return null;
      }
      const memory = {
        id: stringToUuid2(channelId + "-voice-message-" + Date.now()),
        agentId: this.runtime.agentId,
        content: {
          text: message,
          source: "discord",
          url: channel.url
        },
        userId: userIdUUID,
        roomId,
        embedding: getEmbeddingZeroVector2(),
        createdAt: Date.now()
      };
      if (!memory.content.text) {
        return { text: "", action: "IGNORE" };
      }
      await this.runtime.messageManager.createMemory(memory);
      state = await this.runtime.updateRecentMessageState(state);
      const shouldIgnore = await this._shouldIgnore(memory);
      if (shouldIgnore) {
        return { text: "", action: "IGNORE" };
      }
      const shouldRespond = await this._shouldRespond(
        message,
        userId,
        channel,
        state
      );
      if (!shouldRespond) {
        return;
      }
      const context = composeContext7({
        state,
        template: this.runtime.character.templates?.discordVoiceHandlerTemplate || this.runtime.character.templates?.messageHandlerTemplate || discordVoiceHandlerTemplate
      });
      const responseContent = await this._generateResponse(
        memory,
        state,
        context
      );
      const callback = async (content2) => {
        console.log("callback content: ", content2);
        const { roomId: roomId2 } = memory;
        const responseMemory = {
          id: stringToUuid2(
            memory.id + "-voice-response-" + Date.now()
          ),
          agentId: this.runtime.agentId,
          userId: this.runtime.agentId,
          content: {
            ...content2,
            user: this.runtime.character.name,
            inReplyTo: memory.id
          },
          roomId: roomId2,
          embedding: getEmbeddingZeroVector2()
        };
        if (responseMemory.content.text?.trim()) {
          await this.runtime.messageManager.createMemory(
            responseMemory
          );
          state = await this.runtime.updateRecentMessageState(state);
          const responseStream = await this.runtime.getService(
            ServiceType4.SPEECH_GENERATION
          ).generate(this.runtime, content2.text);
          if (responseStream) {
            await this.playAudioStream(
              userId,
              responseStream
            );
          }
          await this.runtime.evaluate(memory, state);
        } else {
          console.warn("Empty response, skipping");
        }
        return [responseMemory];
      };
      const responseMemories = await callback(responseContent);
      const response = responseContent;
      const content = response.responseMessage || response.content || response.message;
      if (!content) {
        return null;
      }
      console.log("responseMemories: ", responseMemories);
      await this.runtime.processActions(
        memory,
        responseMemories,
        state,
        callback
      );
    } catch (error) {
      console.error("Error processing transcribed text:", error);
    }
  }
  async convertOpusToWav(pcmBuffer) {
    try {
      const wavHeader = getWavHeader(
        pcmBuffer.length,
        DECODE_SAMPLE_RATE
      );
      const wavBuffer = Buffer.concat([wavHeader, pcmBuffer]);
      return wavBuffer;
    } catch (error) {
      console.error("Error converting PCM to WAV:", error);
      throw error;
    }
  }
  async _shouldRespond(message, userId, channel, state) {
    if (userId === this.client.user?.id) return false;
    const lowerMessage = message.toLowerCase();
    const botName = this.client.user.username.toLowerCase();
    const characterName = this.runtime.character.name.toLowerCase();
    const guild = channel.guild;
    const member = guild?.members.cache.get(this.client.user?.id);
    const nickname = member?.nickname;
    if (lowerMessage.includes(botName) || lowerMessage.includes(characterName) || lowerMessage.includes(
      this.client.user?.tag.toLowerCase()
    ) || nickname && lowerMessage.includes(nickname.toLowerCase())) {
      return true;
    }
    if (!channel.guild) {
      return true;
    }
    const shouldRespondContext = composeContext7({
      state,
      template: this.runtime.character.templates?.discordShouldRespondTemplate || this.runtime.character.templates?.shouldRespondTemplate || discordShouldRespondTemplate
    });
    const response = await generateShouldRespond2({
      runtime: this.runtime,
      context: shouldRespondContext,
      modelClass: ModelClass9.SMALL
    });
    if (response === "RESPOND") {
      return true;
    } else if (response === "IGNORE") {
      return false;
    } else if (response === "STOP") {
      return false;
    } else {
      console.error(
        "Invalid response from response generateText:",
        response
      );
      return false;
    }
  }
  async _generateResponse(message, state, context) {
    const { userId, roomId } = message;
    const response = await generateMessageResponse2({
      runtime: this.runtime,
      context,
      modelClass: ModelClass9.SMALL
    });
    response.source = "discord";
    if (!response) {
      console.error("No response from generateMessageResponse");
      return;
    }
    await this.runtime.databaseAdapter.log({
      body: { message, context, response },
      userId,
      roomId,
      type: "response"
    });
    return response;
  }
  async _shouldIgnore(message) {
    elizaLogger3.debug("message.content: ", message.content);
    if (message.content.text.length < 3) {
      return true;
    }
    const loseInterestWords = [
      // telling the bot to stop talking
      "shut up",
      "stop",
      "dont talk",
      "silence",
      "stop talking",
      "be quiet",
      "hush",
      "stfu",
      "stupid bot",
      "dumb bot",
      // offensive words
      "fuck",
      "shit",
      "damn",
      "suck",
      "dick",
      "cock",
      "sex",
      "sexy"
    ];
    if (message.content.text.length < 50 && loseInterestWords.some(
      (word) => message.content.text?.toLowerCase().includes(word)
    )) {
      return true;
    }
    const ignoreWords = ["k", "ok", "bye", "lol", "nm", "uh"];
    if (message.content.text?.length < 8 && ignoreWords.some(
      (word) => message.content.text?.toLowerCase().includes(word)
    )) {
      return true;
    }
    return false;
  }
  async scanGuild(guild) {
    let chosenChannel = null;
    try {
      const channelId = this.runtime.getSetting(
        "DISCORD_VOICE_CHANNEL_ID"
      );
      if (channelId) {
        const channel = await guild.channels.fetch(channelId);
        if (channel?.isVoiceBased()) {
          chosenChannel = channel;
        }
      }
      if (!chosenChannel) {
        const channels = (await guild.channels.fetch()).filter(
          (channel) => channel?.type == ChannelType7.GuildVoice
        );
        for (const [, channel] of channels) {
          const voiceChannel = channel;
          if (voiceChannel.members.size > 0 && (chosenChannel === null || voiceChannel.members.size > chosenChannel.members.size)) {
            chosenChannel = voiceChannel;
          }
        }
      }
      if (chosenChannel) {
        console.log(`Joining channel: ${chosenChannel.name}`);
        await this.joinChannel(chosenChannel);
      } else {
        console.warn("No suitable voice channel found to join.");
      }
    } catch (error) {
      console.error("Error selecting or joining a voice channel:", error);
    }
  }
  async playAudioStream(userId, audioStream) {
    const connection = this.connections.get(userId);
    if (connection == null) {
      console.log(`No connection for user ${userId}`);
      return;
    }
    this.cleanupAudioPlayer(this.activeAudioPlayer);
    const audioPlayer = createAudioPlayer({
      behaviors: {
        noSubscriber: NoSubscriberBehavior.Pause
      }
    });
    this.activeAudioPlayer = audioPlayer;
    connection.subscribe(audioPlayer);
    const audioStartTime = Date.now();
    const resource = createAudioResource(audioStream, {
      inputType: StreamType.Arbitrary
    });
    audioPlayer.play(resource);
    audioPlayer.on("error", (err) => {
      console.log(`Audio player error: ${err}`);
    });
    audioPlayer.on(
      "stateChange",
      (_oldState, newState) => {
        if (newState.status == "idle") {
          const idleTime = Date.now();
          console.log(
            `Audio playback took: ${idleTime - audioStartTime}ms`
          );
        }
      }
    );
  }
  cleanupAudioPlayer(audioPlayer) {
    if (!audioPlayer) return;
    audioPlayer.stop();
    audioPlayer.removeAllListeners();
    if (audioPlayer === this.activeAudioPlayer) {
      this.activeAudioPlayer = null;
    }
  }
  async handleJoinChannelCommand(interaction) {
    try {
      await interaction.deferReply();
      const channelId = interaction.options.get("channel")?.value;
      if (!channelId) {
        await interaction.editReply(
          "Please provide a voice channel to join."
        );
        return;
      }
      const guild = interaction.guild;
      if (!guild) {
        await interaction.editReply("Could not find guild.");
        return;
      }
      const voiceChannel = interaction.guild.channels.cache.find(
        (channel) => channel.id === channelId && channel.type === ChannelType7.GuildVoice
      );
      if (!voiceChannel) {
        await interaction.editReply("Voice channel not found!");
        return;
      }
      await this.joinChannel(voiceChannel);
      await interaction.editReply(
        `Joined voice channel: ${voiceChannel.name}`
      );
    } catch (error) {
      console.error("Error joining voice channel:", error);
      await interaction.editReply("Failed to join the voice channel.").catch(console.error);
    }
  }
  async handleLeaveChannelCommand(interaction) {
    const connection = getVoiceConnection3(interaction.guildId);
    if (!connection) {
      await interaction.reply("Not currently in a voice channel.");
      return;
    }
    try {
      connection.destroy();
      await interaction.reply("Left the voice channel.");
    } catch (error) {
      console.error("Error leaving voice channel:", error);
      await interaction.reply("Failed to leave the voice channel.");
    }
  }
};

// src/index.ts
import { PermissionsBitField as PermissionsBitField2 } from "discord.js";
var DiscordClient = class extends EventEmitter2 {
  apiToken;
  client;
  runtime;
  character;
  messageManager;
  voiceManager;
  constructor(runtime) {
    super();
    this.apiToken = runtime.getSetting("DISCORD_API_TOKEN");
    this.client = new Client5({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.DirectMessageTyping,
        GatewayIntentBits.GuildMessageTyping,
        GatewayIntentBits.GuildMessageReactions
      ],
      partials: [
        Partials.Channel,
        Partials.Message,
        Partials.User,
        Partials.Reaction
      ]
    });
    this.runtime = runtime;
    this.voiceManager = new VoiceManager2(this);
    this.messageManager = new MessageManager(this, this.voiceManager);
    this.client.once(Events.ClientReady, this.onClientReady.bind(this));
    this.client.login(this.apiToken);
    this.setupEventListeners();
    this.runtime.registerAction(joinvoice_default);
    this.runtime.registerAction(leavevoice_default);
    this.runtime.registerAction(summarize_conversation_default);
    this.runtime.registerAction(chat_with_attachments_default);
    this.runtime.registerAction(transcribe_media_default);
    this.runtime.registerAction(download_media_default);
    this.runtime.providers.push(channelState_default);
    this.runtime.providers.push(voiceState_default);
  }
  setupEventListeners() {
    this.client.on("guildCreate", this.handleGuildCreate.bind(this));
    this.client.on(
      Events.MessageReactionAdd,
      this.handleReactionAdd.bind(this)
    );
    this.client.on(
      Events.MessageReactionRemove,
      this.handleReactionRemove.bind(this)
    );
    this.client.on(
      "voiceStateUpdate",
      this.voiceManager.handleVoiceStateUpdate.bind(this.voiceManager)
    );
    this.client.on(
      "userStream",
      this.voiceManager.handleUserStream.bind(this.voiceManager)
    );
    this.client.on(
      Events.MessageCreate,
      this.messageManager.handleMessage.bind(this.messageManager)
    );
    this.client.on(
      Events.InteractionCreate,
      this.handleInteractionCreate.bind(this)
    );
  }
  async onClientReady(readyClient) {
    elizaLogger4.success(`Logged in as ${readyClient.user?.tag}`);
    const commands = [
      {
        name: "joinchannel",
        description: "Join a voice channel",
        options: [
          {
            name: "channel",
            type: 7,
            // CHANNEL type
            description: "The voice channel to join",
            required: true,
            channel_types: [2]
            // GuildVoice type
          }
        ]
      },
      {
        name: "leavechannel",
        description: "Leave the current voice channel"
      }
    ];
    try {
      await this.client.application?.commands.set(commands);
      elizaLogger4.success("Slash commands registered");
    } catch (error) {
      console.error("Error registering slash commands:", error);
    }
    const requiredPermissions = [
      // Text Permissions
      PermissionsBitField2.Flags.ViewChannel,
      PermissionsBitField2.Flags.SendMessages,
      PermissionsBitField2.Flags.SendMessagesInThreads,
      PermissionsBitField2.Flags.CreatePrivateThreads,
      PermissionsBitField2.Flags.CreatePublicThreads,
      PermissionsBitField2.Flags.EmbedLinks,
      PermissionsBitField2.Flags.AttachFiles,
      PermissionsBitField2.Flags.AddReactions,
      PermissionsBitField2.Flags.UseExternalEmojis,
      PermissionsBitField2.Flags.UseExternalStickers,
      PermissionsBitField2.Flags.MentionEveryone,
      PermissionsBitField2.Flags.ManageMessages,
      PermissionsBitField2.Flags.ReadMessageHistory,
      // Voice Permissions
      PermissionsBitField2.Flags.Connect,
      PermissionsBitField2.Flags.Speak,
      PermissionsBitField2.Flags.UseVAD,
      PermissionsBitField2.Flags.PrioritySpeaker
    ].reduce((a, b) => a | b, 0n);
    elizaLogger4.success("Use this URL to add the bot to your server:");
    elizaLogger4.success(
      `https://discord.com/api/oauth2/authorize?client_id=${readyClient.user?.id}&permissions=${requiredPermissions}&scope=bot%20applications.commands`
    );
    await this.onReady();
  }
  async handleReactionAdd(reaction, user) {
    try {
      elizaLogger4.log("Reaction added");
      if (!reaction || !user) {
        elizaLogger4.warn("Invalid reaction or user");
        return;
      }
      let emoji = reaction.emoji.name;
      if (!emoji && reaction.emoji.id) {
        emoji = `<:${reaction.emoji.name}:${reaction.emoji.id}>`;
      }
      if (reaction.partial) {
        try {
          await reaction.fetch();
        } catch (error) {
          elizaLogger4.error(
            "Failed to fetch partial reaction:",
            error
          );
          return;
        }
      }
      const timestamp = Date.now();
      const roomId = stringToUuid3(
        `${reaction.message.channel.id}-${this.runtime.agentId}`
      );
      const userIdUUID = stringToUuid3(
        `${user.id}-${this.runtime.agentId}`
      );
      const reactionUUID = stringToUuid3(
        `${reaction.message.id}-${user.id}-${emoji}-${timestamp}-${this.runtime.agentId}`
      );
      if (!userIdUUID || !roomId) {
        elizaLogger4.error("Invalid user ID or room ID", {
          userIdUUID,
          roomId
        });
        return;
      }
      const messageContent = reaction.message.content || "";
      const truncatedContent = messageContent.length > 100 ? `${messageContent.substring(0, 100)}...` : messageContent;
      const reactionMessage = `*<${emoji}>: "${truncatedContent}"*`;
      const userName = reaction.message.author?.username || "unknown";
      const name = reaction.message.author?.displayName || userName;
      await this.runtime.ensureConnection(
        userIdUUID,
        roomId,
        userName,
        name,
        "discord"
      );
      const memory = {
        id: reactionUUID,
        userId: userIdUUID,
        agentId: this.runtime.agentId,
        content: {
          text: reactionMessage,
          source: "discord",
          inReplyTo: stringToUuid3(
            `${reaction.message.id}-${this.runtime.agentId}`
          )
        },
        roomId,
        createdAt: timestamp,
        embedding: getEmbeddingZeroVector3()
      };
      try {
        await this.runtime.messageManager.createMemory(memory);
        elizaLogger4.debug("Reaction memory created", {
          reactionId: reactionUUID,
          emoji,
          userId: user.id
        });
      } catch (error) {
        if (error.code === "23505") {
          elizaLogger4.warn("Duplicate reaction memory, skipping", {
            reactionId: reactionUUID
          });
          return;
        }
        throw error;
      }
    } catch (error) {
      elizaLogger4.error("Error handling reaction:", error);
    }
  }
  async handleReactionRemove(reaction, user) {
    elizaLogger4.log("Reaction removed");
    let emoji = reaction.emoji.name;
    if (!emoji && reaction.emoji.id) {
      emoji = `<:${reaction.emoji.name}:${reaction.emoji.id}>`;
    }
    if (reaction.partial) {
      try {
        await reaction.fetch();
      } catch (error) {
        console.error(
          "Something went wrong when fetching the message:",
          error
        );
        return;
      }
    }
    const messageContent = reaction.message.content;
    const truncatedContent = messageContent.length > 50 ? messageContent.substring(0, 50) + "..." : messageContent;
    const reactionMessage = `*Removed <${emoji} emoji> from: "${truncatedContent}"*`;
    const roomId = stringToUuid3(
      reaction.message.channel.id + "-" + this.runtime.agentId
    );
    const userIdUUID = stringToUuid3(user.id);
    const reactionUUID = stringToUuid3(
      `${reaction.message.id}-${user.id}-${emoji}-removed-${this.runtime.agentId}`
    );
    const userName = reaction.message.author.username;
    const name = reaction.message.author.displayName;
    await this.runtime.ensureConnection(
      userIdUUID,
      roomId,
      userName,
      name,
      "discord"
    );
    try {
      await this.runtime.messageManager.createMemory({
        id: reactionUUID,
        // This is the ID of the reaction removal message
        userId: userIdUUID,
        agentId: this.runtime.agentId,
        content: {
          text: reactionMessage,
          source: "discord",
          inReplyTo: stringToUuid3(
            reaction.message.id + "-" + this.runtime.agentId
          )
          // This is the ID of the original message
        },
        roomId,
        createdAt: Date.now(),
        embedding: getEmbeddingZeroVector3()
      });
    } catch (error) {
      console.error("Error creating reaction removal message:", error);
    }
  }
  handleGuildCreate(guild) {
    console.log(`Joined guild ${guild.name}`);
    this.voiceManager.scanGuild(guild);
  }
  async handleInteractionCreate(interaction) {
    if (!interaction.isCommand()) return;
    switch (interaction.commandName) {
      case "joinchannel":
        await this.voiceManager.handleJoinChannelCommand(interaction);
        break;
      case "leavechannel":
        await this.voiceManager.handleLeaveChannelCommand(interaction);
        break;
    }
  }
  async onReady() {
    const guilds = await this.client.guilds.fetch();
    for (const [, guild] of guilds) {
      const fullGuild = await guild.fetch();
      this.voiceManager.scanGuild(fullGuild);
    }
  }
};
function startDiscord(runtime) {
  return new DiscordClient(runtime);
}
var DiscordClientInterface = {
  start: async (runtime) => new DiscordClient(runtime),
  stop: async (_runtime) => {
    console.warn("Discord client does not support stopping yet");
  }
};
export {
  DiscordClient,
  DiscordClientInterface,
  startDiscord
};
//# sourceMappingURL=index.js.map