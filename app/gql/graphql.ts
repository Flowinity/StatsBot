/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.This scalar is serialized to a string in ISO 8601 format and parsed from a string in ISO 8601 format. */
  DateTimeISO: { input: any; output: any; }
  /** File custom scalar type */
  File: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export type AccessedFrom = {
  __typename?: 'AccessedFrom';
  asn?: Maybe<Scalars['Float']['output']>;
  date: Scalars['String']['output'];
  ip: Scalars['String']['output'];
  isp?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  userAgent?: Maybe<Scalars['String']['output']>;
};

export type AddAppUserInput = {
  manage?: InputMaybe<Scalars['Boolean']['input']>;
  oauthAppId: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type AddBotToChatInput = {
  associationId: Scalars['Float']['input'];
  botAppId: Scalars['String']['input'];
  permissions: Array<Scalars['String']['input']>;
};

export type AddChatUser = {
  action: ToggleUser;
  chatAssociationId: Scalars['Float']['input'];
  users: Array<Scalars['Float']['input']>;
};

export type AddRank = {
  chatAssociationId: Scalars['Float']['input'];
  rankId: Scalars['String']['input'];
  updatingChatAssociationId: Scalars['Float']['input'];
};

export type AlternatePassword = {
  __typename?: 'AlternatePassword';
  name: Scalars['String']['output'];
  scopes: Scalars['String']['output'];
  totp: Scalars['Boolean']['output'];
};

export type Announcement = {
  __typename?: 'Announcement';
  content: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['Float']['output'];
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  user: PartialUserBase;
  userId: Scalars['Float']['output'];
};

/** Used for chat audit log to determine what type of action was performed. */
export enum AuditLogActionType {
  Add = 'ADD',
  Modify = 'MODIFY',
  Remove = 'REMOVE'
}

/** Used for chat audit log. */
export enum AuditLogCategory {
  Bot = 'BOT',
  Emoji = 'EMOJI',
  Invite = 'INVITE',
  Message = 'MESSAGE',
  PinMessage = 'PIN_MESSAGE',
  Rank = 'RANK',
  Settings = 'SETTINGS',
  User = 'USER'
}

export type AuditLogInput = {
  associationId: Scalars['Float']['input'];
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
};

export type AuthorizeAppInput = {
  id: Scalars['String']['input'];
  /** Used for bots. */
  permissions?: InputMaybe<Array<Scalars['String']['input']>>;
  scopes: Scalars['String']['input'];
};

export type AuthorizeAppResponse = {
  __typename?: 'AuthorizeAppResponse';
  token?: Maybe<Scalars['String']['output']>;
};

export type AutoCollectApproval = {
  __typename?: 'AutoCollectApproval';
  approved: Scalars['Boolean']['output'];
  attachment?: Maybe<Upload>;
  autoCollectRule?: Maybe<AutoCollectRule>;
  autoCollectRuleId: Scalars['Float']['output'];
  collection?: Maybe<Collection>;
  collectionId: Scalars['Float']['output'];
  id: Scalars['Float']['output'];
  uploadId: Scalars['Float']['output'];
  user?: Maybe<PartialUserBase>;
  userId: Scalars['Float']['output'];
};

export type AutoCollectParentRule = {
  __typename?: 'AutoCollectParentRule';
  id: Scalars['Float']['output'];
  rules: Array<SubRule>;
};

export type AutoCollectRule = {
  __typename?: 'AutoCollectRule';
  collectionId: Scalars['Float']['output'];
  enabled: Scalars['Boolean']['output'];
  id: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  requireApproval: Scalars['Boolean']['output'];
  rules: Array<AutoCollectParentRule>;
};

export type Badge = {
  __typename?: 'Badge';
  color?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['Float']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  plan: Plan;
  priority?: Maybe<Scalars['Float']['output']>;
  tooltip?: Maybe<Scalars['String']['output']>;
  unlocked: Scalars['Boolean']['output'];
  users: Array<PartialUserBase>;
};

export type BlockUserInput = {
  silent: Scalars['Boolean']['input'];
  userId: Scalars['Float']['input'];
};

export type BlockedUser = {
  __typename?: 'BlockedUser';
  blockedUser?: Maybe<PartialUserBase>;
  blockedUserId: Scalars['Float']['output'];
  createdAt: Scalars['Date']['output'];
  id: Scalars['String']['output'];
  /** To the blocked user it appears as though they're unblocked, however the blocker will not receive any messages from them, and their messages will be hidden inside of group chats. */
  silent: Scalars['Boolean']['output'];
  updatedAt: Scalars['Date']['output'];
  user?: Maybe<PartialUserBase>;
  userId: Scalars['Float']['output'];
};

export type Chat = {
  __typename?: 'Chat';
  _redisSortDate?: Maybe<Scalars['String']['output']>;
  association?: Maybe<ChatAssociation>;
  background?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  description?: Maybe<Scalars['String']['output']>;
  emoji?: Maybe<Array<ChatEmoji>>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['Float']['output'];
  /** Array is empty if you don't have the `OVERVIEW` permission in the chat. */
  invites: Array<ChatInvite>;
  /**
   * This is used if the chat is owned by a Colubrina legacy user.
   * @deprecated Use user instead.
   */
  legacyUser?: Maybe<PartialUserBase>;
  /**
   * This is used if the chat is owned by a Colubrina legacy user.
   * @deprecated Use userId instead.
   */
  legacyUserId?: Maybe<Scalars['Float']['output']>;
  messages: Array<Message>;
  name: Scalars['String']['output'];
  ranks: Array<ChatRank>;
  recipient?: Maybe<PartialUserBase>;
  type: Scalars['String']['output'];
  unread?: Maybe<Scalars['Float']['output']>;
  updatedAt: Scalars['DateTimeISO']['output'];
  /** Null if the chat is owned by a Colubrina legacy user, or the account was deleted. */
  user?: Maybe<PartialUserBase>;
  /** Null if the chat is owned by a Colubrina legacy user, or the account was deleted. */
  userId?: Maybe<Scalars['Float']['output']>;
  users: Array<ChatAssociation>;
};

export type ChatAssociation = {
  __typename?: 'ChatAssociation';
  chatId: Scalars['Float']['output'];
  createdAt: Scalars['Date']['output'];
  /** Only true/false for current user, null for other ChatAssociations. This determines whether the chat is visible in the sidebar (open or closed). */
  hidden?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['Float']['output'];
  invite?: Maybe<ChatInvite>;
  inviteUsed?: Maybe<Scalars['String']['output']>;
  lastRead?: Maybe<Scalars['Float']['output']>;
  /**
   * Used for legacy Colubrina accounts.
   * @deprecated Use `user` instead.
   */
  legacyUser?: Maybe<PartialUserBase>;
  /**
   * Used for legacy Colubrina accounts.
   * @deprecated Use `userId` instead.
   */
  legacyUserId?: Maybe<Scalars['Float']['output']>;
  notifications: Scalars['String']['output'];
  permissions: Array<Scalars['String']['output']>;
  /** @deprecated `ChatRank` has replaced legacy rank for granular permission control. */
  rank: Scalars['String']['output'];
  ranks: Array<ChatRank>;
  ranksMap: Array<Scalars['String']['output']>;
  /** Used for user virtual which falls back to a Colubrina account. */
  tpuUser?: Maybe<PartialUserBase>;
  user?: Maybe<PartialUserBase>;
  userId?: Maybe<Scalars['Float']['output']>;
};

export type ChatAuditLog = {
  __typename?: 'ChatAuditLog';
  actionType: AuditLogActionType;
  category: AuditLogCategory;
  chatId: Scalars['Float']['output'];
  createdAt: Scalars['Date']['output'];
  id: Scalars['String']['output'];
  message: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
  userId: Scalars['Float']['output'];
};

export type ChatEmoji = {
  __typename?: 'ChatEmoji';
  chatId: Scalars['Float']['output'];
  createdAt: Scalars['Date']['output'];
  deleted: Scalars['Boolean']['output'];
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Date']['output'];
  userId: Scalars['Float']['output'];
};

export type ChatInput = {
  associationId?: InputMaybe<Scalars['Float']['input']>;
  chatId?: InputMaybe<Scalars['Float']['input']>;
};

export type ChatInvite = {
  __typename?: 'ChatInvite';
  chat: Chat;
  chatId: Scalars['Float']['output'];
  createdAt: Scalars['Date']['output'];
  expiredAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['String']['output'];
  invalidated: Scalars['Boolean']['output'];
  rank?: Maybe<ChatRank>;
  /** Automatically assigns rank to user when joining. If unset the backend will set the `managed` Members role. */
  rankId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Date']['output'];
  user: PartialUserBase;
  userId: Scalars['Float']['output'];
};

export type ChatPermission = {
  __typename?: 'ChatPermission';
  createdAt?: Maybe<Scalars['Date']['output']>;
  description: Scalars['String']['output'];
  group: RankPermissionGroup;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type ChatRank = {
  __typename?: 'ChatRank';
  associations: Array<ChatAssociation>;
  chatId: Scalars['Float']['output'];
  color?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['String']['output'];
  index: Scalars['Float']['output'];
  managed: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  permissions: Array<ChatPermission>;
  permissionsMap: Array<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  userId: Scalars['Float']['output'];
};

export type ChatsInput = {
  hidden?: Scalars['Boolean']['input'];
};

export type Collection = {
  __typename?: 'Collection';
  attachments: Array<Upload>;
  autoCollectApprovals: Array<AutoCollectApproval>;
  id: Scalars['Float']['output'];
  image?: Maybe<Scalars['String']['output']>;
  itemCount?: Maybe<Scalars['Float']['output']>;
  name: Scalars['String']['output'];
  permissionsMetadata: PermissionsMetadata;
  preview?: Maybe<CollectionItem>;
  recipient?: Maybe<CollectionUser>;
  shareLink?: Maybe<Scalars['String']['output']>;
  shared?: Maybe<Scalars['Boolean']['output']>;
  user: PartialUserBase;
  userId: Scalars['Float']['output'];
  users: Array<CollectionUser>;
};

/** The type of collection */
export enum CollectionFilter {
  All = 'ALL',
  Configure = 'CONFIGURE',
  Owned = 'OWNED',
  Read = 'READ',
  Shared = 'SHARED',
  Write = 'WRITE'
}

export type CollectionInput = {
  id?: InputMaybe<Scalars['Float']['input']>;
  shareLink?: InputMaybe<Scalars['String']['input']>;
};

export type CollectionItem = {
  __typename?: 'CollectionItem';
  attachment: Upload;
  attachmentId: Scalars['Float']['output'];
  collection: Collection;
  collectionId: Scalars['Float']['output'];
  id: Scalars['Float']['output'];
  /** Used to prevent duplicates by forming `uploadId-collectionId`. Can be null for items created before October 2022. */
  identifier?: Maybe<Scalars['String']['output']>;
  pinned: Scalars['Boolean']['output'];
  user: PartialUserBase;
  userId: Scalars['Float']['output'];
};

export type CollectionUser = {
  __typename?: 'CollectionUser';
  accepted: Scalars['Boolean']['output'];
  collection?: Maybe<Collection>;
  collectionId: Scalars['Float']['output'];
  configure: Scalars['Boolean']['output'];
  createdAt: Scalars['Date']['output'];
  id: Scalars['Float']['output'];
  identifier?: Maybe<Scalars['String']['output']>;
  read: Scalars['Boolean']['output'];
  recipientId?: Maybe<Scalars['Float']['output']>;
  sender?: Maybe<PartialUserBase>;
  senderId?: Maybe<Scalars['Float']['output']>;
  updatedAt: Scalars['Date']['output'];
  user?: Maybe<PartialUserBase>;
  write: Scalars['Boolean']['output'];
};

export type Connection = {
  __typename?: 'Connection';
  ip: Scalars['String']['output'];
  /** @deprecated No longer used in v4. */
  whitelist: Scalars['Boolean']['output'];
};

export type CoreState = {
  __typename?: 'CoreState';
  _redis: Scalars['String']['output'];
  announcements: Array<Announcement>;
  commitVersion: Scalars['String']['output'];
  connection: Connection;
  domain: Scalars['String']['output'];
  /** List of enabled features for TPU instance */
  features: Features;
  finishedSetup: Scalars['Boolean']['output'];
  hostname: Scalars['String']['output'];
  hostnameWithProtocol: Scalars['String']['output'];
  hostnames: Array<Scalars['String']['output']>;
  inviteAFriend: Scalars['Boolean']['output'];
  maintenance: Maintenance;
  name: Scalars['String']['output'];
  /** Whether the TPU instance is the officially run instance on privateuploader.com. This can be enabled on any instance but can enable unwanted features. */
  officialInstance: Scalars['Boolean']['output'];
  /** List of domains that are pre-trusted for user-generated hyperlinks such as Communications messages which don't require a confirmation to proceed. */
  preTrustedDomains: Array<Scalars['String']['output']>;
  /** Workspaces Note ID for the Privacy Policy. */
  privacyNoteId?: Maybe<Scalars['String']['output']>;
  providers: Providers;
  registrations: Scalars['Boolean']['output'];
  /** Whether the app is running in production mode. */
  release: Scalars['String']['output'];
  server: Scalars['String']['output'];
  stats: CoreStats;
  /** Workspaces Note ID for the Terms of Service. */
  termsNoteId?: Maybe<Scalars['String']['output']>;
  /** Uptime of the TPU Server in seconds. */
  uptime: Scalars['Float']['output'];
  /** Uptime of the system in seconds. */
  uptimeSys: Scalars['Float']['output'];
  weather: Weather;
};

export type CoreStats = {
  __typename?: 'CoreStats';
  announcements: Scalars['Float']['output'];
  chats: Scalars['Float']['output'];
  collectionItems: Scalars['Float']['output'];
  collections: Scalars['Float']['output'];
  docs: Scalars['Float']['output'];
  hours?: Maybe<Array<Scalars['String']['output']>>;
  inviteMilestone: Scalars['Float']['output'];
  invites: Scalars['Float']['output'];
  messageGraph: DataLabelsGraph;
  messages: Scalars['Float']['output'];
  pulse: Scalars['Float']['output'];
  pulseGraph: DataLabelsGraph;
  pulses: Scalars['Float']['output'];
  uploadGraph: DataLabelsGraph;
  uploads: Scalars['Float']['output'];
  usage: Scalars['Float']['output'];
  users: Scalars['Float']['output'];
};

export type CreateAppInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  private: Scalars['Boolean']['input'];
  redirectUri?: InputMaybe<Scalars['String']['input']>;
  verified: Scalars['Boolean']['input'];
};

export type CreateBotInput = {
  id: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type CreateChatInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  users: Array<Scalars['Float']['input']>;
};

export type CreateInviteInput = {
  associationId: Scalars['Float']['input'];
  /** In hours. */
  expiry?: InputMaybe<Scalars['Float']['input']>;
  /** Auto assign rank on join. */
  rankId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateNoteInput = {
  name: Scalars['String']['input'];
  workspaceFolderId: Scalars['Float']['input'];
};

export type CreateRank = {
  associationId: Scalars['Float']['input'];
  color?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CreateWorkspaceFolderInput = {
  name: Scalars['String']['input'];
  workspaceId: Scalars['Float']['input'];
};

/** Used for deleting chats and transferring ownership. */
export type DangerZoneChatInput = {
  associationId: Scalars['Float']['input'];
  /** You may use either 2FA token or password to delete the chat. */
  password?: InputMaybe<Scalars['String']['input']>;
  /** TOTP/2FA code if enabled. You may use either 2FA token or password to delete the chat. */
  totp?: InputMaybe<Scalars['String']['input']>;
};

export type DataLabelsGraph = {
  __typename?: 'DataLabelsGraph';
  data: Array<Scalars['Float']['output']>;
  labels: Array<Scalars['String']['output']>;
};

export type DeleteEmojiInput = {
  associationId: Scalars['Float']['input'];
  id: Scalars['String']['input'];
};

export type DeleteRank = {
  associationId: Scalars['Float']['input'];
  rankId: Scalars['String']['input'];
};

export type DeleteWorkspaceItemInput = {
  id: Scalars['Float']['input'];
  type: WorkspaceItemType;
};

export type DeregisterCommand = {
  command: Scalars['String']['input'];
};

export type Domain = {
  __typename?: 'Domain';
  /** @deprecated Use `active` instead. */
  DNSProvisioned: Scalars['Boolean']['output'];
  active: Scalars['Boolean']['output'];
  /** @deprecated Cloudflare integration was removed in TPUv2. */
  advanced?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Granular user control was removed in TPUv2. */
  customUserEligibility?: Maybe<Array<Scalars['Int']['output']>>;
  domain: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  /** @deprecated Granular user control was removed in TPUv2. */
  restricted: Scalars['String']['output'];
  /** @deprecated Subdomains were removed in TPUv2. */
  subdomains: Scalars['Boolean']['output'];
  /** @deprecated Subdomains were removed in TPUv2. */
  subdomainsCreate: Scalars['Boolean']['output'];
  user: PartialUserBase;
  userId: Scalars['Float']['output'];
  /** Only populated in some admin contexts */
  users?: Maybe<Array<PartialUserBase>>;
  /** @deprecated Cloudflare integration was removed in TPUv2. */
  zone?: Maybe<Scalars['String']['output']>;
};

export type Embed = {
  __typename?: 'Embed';
  data?: Maybe<Scalars['JSON']['output']>;
  type: Scalars['String']['output'];
};

export type EmbedInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  graph?: InputMaybe<InteractiveGraphInput>;
  image?: InputMaybe<Scalars['String']['input']>;
  siteName?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type Experiment = {
  __typename?: 'Experiment';
  key: Scalars['String']['output'];
  user: PartialUserBase;
  userId: Scalars['Float']['output'];
  value: Scalars['String']['output'];
};

export type ExperimentType = {
  __typename?: 'ExperimentType';
  createdAt?: Maybe<Scalars['Date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  refresh?: Maybe<Scalars['Boolean']['output']>;
  value: Scalars['Float']['output'];
};

export type Features = {
  __typename?: 'Features';
  autoCollects: Scalars['Boolean']['output'];
  collections: Scalars['Boolean']['output'];
  communications: Scalars['Boolean']['output'];
  insights: Scalars['Boolean']['output'];
  workspaces: Scalars['Boolean']['output'];
};

export type Friend = {
  __typename?: 'Friend';
  createdAt: Scalars['Date']['output'];
  friendId: Scalars['Float']['output'];
  id: Scalars['Float']['output'];
  otherUser: PartialUserFriend;
  status: FriendStatus;
  updatedAt: Scalars['Date']['output'];
  user: PartialUserFriend;
  userId: Scalars['Float']['output'];
};

export type FriendNickname = {
  __typename?: 'FriendNickname';
  createdAt: Scalars['Date']['output'];
  friend: PartialUserBase;
  friendId: Scalars['Float']['output'];
  id: Scalars['Float']['output'];
  nickname: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
  user: PartialUserBase;
  userId: Scalars['Float']['output'];
};

/** Friend request status. */
export enum FriendStatus {
  Accepted = 'ACCEPTED',
  Incoming = 'INCOMING',
  None = 'NONE',
  Outgoing = 'OUTGOING'
}

export type FriendsInput = {
  status?: InputMaybe<FriendStatus>;
};

/** The filter to apply to the gallery request */
export enum GalleryFilter {
  All = 'ALL',
  Audio = 'AUDIO',
  Gifs = 'GIFS',
  Images = 'IMAGES',
  IncludeDeletable = 'INCLUDE_DELETABLE',
  IncludeMetadata = 'INCLUDE_METADATA',
  NoCollection = 'NO_COLLECTION',
  Other = 'OTHER',
  Owned = 'OWNED',
  Paste = 'PASTE',
  Shared = 'SHARED',
  Text = 'TEXT',
  Videos = 'VIDEOS'
}

export type GalleryInput = {
  advanced?: InputMaybe<Array<SearchModeInput>>;
  /** Requires Type to be COLLECTION */
  collectionId?: InputMaybe<Scalars['Float']['input']>;
  filters?: InputMaybe<Array<GalleryFilter>>;
  limit?: InputMaybe<Scalars['Float']['input']>;
  order?: InputMaybe<GalleryOrder>;
  page?: InputMaybe<Scalars['Float']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  /** Requires Type to be COLLECTION */
  shareLink?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<GallerySort>;
  type?: InputMaybe<GalleryType>;
};

/** The order to apply to the gallery request */
export enum GalleryOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

/** The advanced search mode. */
export enum GallerySearchMode {
  After = 'AFTER',
  Before = 'BEFORE',
  Collection = 'COLLECTION',
  During = 'DURING',
  Meta = 'META',
  Name = 'NAME',
  Order = 'ORDER',
  Size = 'SIZE',
  Type = 'TYPE',
  User = 'USER'
}

/** The sort to apply to the gallery request */
export enum GallerySort {
  CreatedAt = 'CREATED_AT',
  Name = 'NAME',
  Size = 'SIZE',
  UpdatedAt = 'UPDATED_AT'
}

/** The type of gallery request, for example if it's the personal gallery page, or a Collection */
export enum GalleryType {
  AutoCollect = 'AUTO_COLLECT',
  Collection = 'COLLECTION',
  Personal = 'PERSONAL',
  Starred = 'STARRED'
}

export type GenericSuccessObject = {
  __typename?: 'GenericSuccessObject';
  success: Scalars['Boolean']['output'];
};

export type GetMailInput = {
  mailbox: Scalars['String']['input'];
  page?: InputMaybe<Scalars['Float']['input']>;
  userId: Scalars['Float']['input'];
};

export type InfiniteMessagesInput = {
  associationId: Scalars['Float']['input'];
  limit?: Scalars['Float']['input'];
  offset?: InputMaybe<Scalars['Float']['input']>;
  position?: InputMaybe<ScrollPosition>;
  search?: InputMaybe<MessagesSearch>;
};

export type Integration = {
  __typename?: 'Integration';
  createdAt: Scalars['Date']['output'];
  error?: Maybe<Scalars['String']['output']>;
  expiresAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id: Scalars['Float']['output'];
  providerUserCache?: Maybe<Scalars['JSON']['output']>;
  providerUserId?: Maybe<Scalars['Float']['output']>;
  providerUsername?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
  user: PartialUserBase;
  userId: Scalars['Float']['output'];
};

export type InteractiveGraphInput = {
  type: Scalars['String']['input'];
};

export type InviteInput = {
  inviteId: Scalars['String']['input'];
};

export type JoinChatFromInviteInput = {
  inviteId: Scalars['String']['input'];
};

export type LeaveChatInput = {
  associationId: Scalars['Float']['input'];
};

export type ListResponse = {
  __typename?: 'ListResponse';
  delimiter: Scalars['String']['output'];
  flags: Array<Scalars['String']['output']>;
  listed: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  path: Scalars['String']['output'];
  specialUse?: Maybe<Scalars['String']['output']>;
  subscribed?: Maybe<Scalars['Boolean']['output']>;
};

export type LoginInput = {
  password: Scalars['String']['input'];
  /** TOTP/2FA code if enabled. */
  totp?: InputMaybe<Scalars['String']['input']>;
  /** Username or email */
  username: Scalars['String']['input'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  token: Scalars['String']['output'];
  user: LoginUser;
};

export type LoginUser = {
  __typename?: 'LoginUser';
  email: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  username: Scalars['String']['output'];
};

export type LookupPrefix = {
  __typename?: 'LookupPrefix';
  botId: Scalars['Float']['output'];
  command: Scalars['String']['output'];
  description: Scalars['String']['output'];
};

export type LookupPrefixInput = {
  chatAssociationId: Scalars['Float']['input'];
  prefix: Scalars['String']['input'];
};

export type Maintenance = {
  __typename?: 'Maintenance';
  enabled: Scalars['Boolean']['output'];
  message?: Maybe<Scalars['String']['output']>;
  statusPage?: Maybe<Scalars['String']['output']>;
};

export type Message = {
  __typename?: 'Message';
  chat: Chat;
  chatId: Scalars['Float']['output'];
  content?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Date']['output'];
  edited: Scalars['Boolean']['output'];
  editedAt?: Maybe<Scalars['Date']['output']>;
  embeds: Array<Embed>;
  emoji?: Maybe<Array<ChatEmoji>>;
  id: Scalars['Float']['output'];
  legacyUser?: Maybe<PartialUserBase>;
  legacyUserId?: Maybe<Scalars['Float']['output']>;
  pinned: Scalars['Boolean']['output'];
  readReceipts: Array<ChatAssociation>;
  reply?: Maybe<Message>;
  replyId?: Maybe<Scalars['Float']['output']>;
  tpuUser?: Maybe<PartialUserBase>;
  type?: Maybe<MessageType>;
  updatedAt: Scalars['Date']['output'];
  user?: Maybe<PartialUserBase>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** The type of message. Can be null for legacy (Colubrina) messages where `MESSAGE` should be inferred. */
export enum MessageType {
  Administrator = 'ADMINISTRATOR',
  Join = 'JOIN',
  Leave = 'LEAVE',
  Message = 'MESSAGE',
  Pin = 'PIN',
  Rename = 'RENAME',
  System = 'SYSTEM'
}

export type MessagesSearch = {
  after?: InputMaybe<Scalars['Date']['input']>;
  before?: InputMaybe<Scalars['Date']['input']>;
  pins?: InputMaybe<Scalars['Boolean']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['Float']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addBotToChat: ChatAssociation;
  addChatRank: ChatRank;
  addChatUsers: GenericSuccessObject;
  addOauthUser: OauthUser;
  adminMigrateLegacyRanksForChat: GenericSuccessObject;
  blockUser: GenericSuccessObject;
  createBotOauthApp: PartialUserBase;
  createChat: Chat;
  createChatInvite: ChatInvite;
  createNote: Note;
  createOauthApp: OauthApp;
  /** Create workspace */
  createWorkspace: Workspace;
  /** Create a new Workspace Folder. */
  createWorkspaceFolder: WorkspaceFolder;
  deleteChatRank: GenericSuccessObject;
  deleteEmoji: GenericSuccessObject;
  deleteGroup: GenericSuccessObject;
  deleteOauthApp: GenericSuccessObject;
  /** Delete a Note. */
  deleteWorkspaceItem: Scalars['Boolean']['output'];
  deregisterBotCommand: GenericSuccessObject;
  joinChatFromInvite: ChatAssociation;
  leaveChat: GenericSuccessObject;
  login: LoginResponse;
  logout: Scalars['Boolean']['output'];
  oauthAppAuthorize: AuthorizeAppResponse;
  oauthAppDeauthorize: GenericSuccessObject;
  register: LoginResponse;
  registerBotCommand: GenericSuccessObject;
  registerBotPrefix: GenericSuccessObject;
  resetOauthSecret: GenericSuccessObject;
  saveNote: Note;
  sendMessage: Message;
  setExperiment: Experiment;
  /** Toggle the ShareLink for a Note. */
  toggleNoteShare: Note;
  toggleUserRank: GenericSuccessObject;
  transferGroupOwnership: Chat;
  updateChat: Chat;
  updateChatRank: ChatRank;
  updateChatRankOrder: Array<ChatRank>;
  updateEmoji: ChatEmoji;
  updateOauthApp: GenericSuccessObject;
  updateOauthUser: OauthUser;
  updateUser: Scalars['Boolean']['output'];
  upload: Upload;
};


export type MutationAddBotToChatArgs = {
  input: AddBotToChatInput;
};


export type MutationAddChatRankArgs = {
  input: CreateRank;
};


export type MutationAddChatUsersArgs = {
  input: AddChatUser;
};


export type MutationAddOauthUserArgs = {
  input: AddAppUserInput;
};


export type MutationBlockUserArgs = {
  input: BlockUserInput;
};


export type MutationCreateBotOauthAppArgs = {
  input: CreateBotInput;
};


export type MutationCreateChatArgs = {
  input: CreateChatInput;
};


export type MutationCreateChatInviteArgs = {
  input: CreateInviteInput;
};


export type MutationCreateNoteArgs = {
  input: CreateNoteInput;
};


export type MutationCreateOauthAppArgs = {
  input: CreateAppInput;
};


export type MutationCreateWorkspaceArgs = {
  input: Scalars['String']['input'];
};


export type MutationCreateWorkspaceFolderArgs = {
  input: CreateWorkspaceFolderInput;
};


export type MutationDeleteChatRankArgs = {
  input: DeleteRank;
};


export type MutationDeleteEmojiArgs = {
  input: DeleteEmojiInput;
};


export type MutationDeleteGroupArgs = {
  input: DangerZoneChatInput;
};


export type MutationDeleteOauthAppArgs = {
  input: MyAppInput;
};


export type MutationDeleteWorkspaceItemArgs = {
  input: DeleteWorkspaceItemInput;
};


export type MutationDeregisterBotCommandArgs = {
  input: DeregisterCommand;
};


export type MutationJoinChatFromInviteArgs = {
  input: JoinChatFromInviteInput;
};


export type MutationLeaveChatArgs = {
  input: LeaveChatInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationOauthAppAuthorizeArgs = {
  input: AuthorizeAppInput;
};


export type MutationOauthAppDeauthorizeArgs = {
  input: MyAppInput;
};


export type MutationRegisterArgs = {
  input: RegisterInput;
};


export type MutationRegisterBotCommandArgs = {
  input: RegisterCommand;
};


export type MutationRegisterBotPrefixArgs = {
  input: RegisterPrefix;
};


export type MutationResetOauthSecretArgs = {
  input: MyAppInput;
};


export type MutationSaveNoteArgs = {
  input: SaveNoteInput;
};


export type MutationSendMessageArgs = {
  input: SendMessageInput;
};


export type MutationSetExperimentArgs = {
  input: SetExperimentInput;
};


export type MutationToggleNoteShareArgs = {
  input: Scalars['Int']['input'];
};


export type MutationToggleUserRankArgs = {
  input: AddRank;
};


export type MutationTransferGroupOwnershipArgs = {
  input: TransferOwnershipInput;
};


export type MutationUpdateChatArgs = {
  input: UpdateChatInput;
};


export type MutationUpdateChatRankArgs = {
  input: UpdateRank;
};


export type MutationUpdateChatRankOrderArgs = {
  input: UpdateRankOrder;
};


export type MutationUpdateEmojiArgs = {
  input: UpdateEmojiInput;
};


export type MutationUpdateOauthAppArgs = {
  input: UpdateAppInput;
};


export type MutationUpdateOauthUserArgs = {
  input: UpdateAppUserInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


export type MutationUploadArgs = {
  file: Scalars['File']['input'];
};

export type MyAppInput = {
  id: Scalars['String']['input'];
};

export type Note = {
  __typename?: 'Note';
  createdAt: Scalars['Date']['output'];
  data?: Maybe<WorkspaceNote>;
  id: Scalars['Float']['output'];
  metadata?: Maybe<WorkspaceNoteMetadata>;
  name: Scalars['String']['output'];
  permissions?: Maybe<NotePermissionsMetadata>;
  shareLink?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Date']['output'];
  versions: Array<NoteVersion>;
  workspaceFolderId: Scalars['Float']['output'];
};

export type NoteInput = {
  id?: InputMaybe<Scalars['Float']['input']>;
  shareLink?: InputMaybe<Scalars['String']['input']>;
};

export type NotePermissionsMetadata = {
  __typename?: 'NotePermissionsMetadata';
  configure: Scalars['Boolean']['output'];
  modify: Scalars['Boolean']['output'];
  read: Scalars['Boolean']['output'];
};

export type NoteVersion = {
  __typename?: 'NoteVersion';
  data?: Maybe<WorkspaceNote>;
  id: Scalars['String']['output'];
  noteId: Scalars['Float']['output'];
  userId: Scalars['Float']['output'];
};

export type Notification = {
  __typename?: 'Notification';
  createdAt: Scalars['Date']['output'];
  dismissed: Scalars['Boolean']['output'];
  id: Scalars['Float']['output'];
  message: Scalars['String']['output'];
  route?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Date']['output'];
  user?: Maybe<PartialUserBase>;
  userId: Scalars['Float']['output'];
};

export type OauthApp = {
  __typename?: 'OauthApp';
  bot?: Maybe<PartialUserBase>;
  botId?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  oauthUsers: Array<OauthUser>;
  private: Scalars['Boolean']['output'];
  redirectUri?: Maybe<Scalars['String']['output']>;
  scopes: Scalars['String']['output'];
  secret?: Maybe<Scalars['String']['output']>;
  shortCode?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user: PartialUserBase;
  userId: Scalars['Float']['output'];
  verified: Scalars['Boolean']['output'];
};

export type OauthConsentApp = {
  __typename?: 'OauthConsentApp';
  bot?: Maybe<PartialUserBase>;
  botId?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  private: Scalars['Boolean']['output'];
  redirectUri?: Maybe<Scalars['String']['output']>;
  scopes: Scalars['String']['output'];
  shortCode?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user: PartialUserBase;
  userId: Scalars['Float']['output'];
  verified: Scalars['Boolean']['output'];
};

export type OauthUser = {
  __typename?: 'OauthUser';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['Date']['output'];
  id: Scalars['String']['output'];
  manage: Scalars['Boolean']['output'];
  oauthAppId: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
  user: PartialUserBase;
  userId: Scalars['Float']['output'];
};

export type PagedMessagesInput = {
  associationId: Scalars['Float']['input'];
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
  position?: InputMaybe<ScrollPosition>;
  search?: InputMaybe<MessagesSearch>;
};

export type Pager = {
  __typename?: 'Pager';
  currentPage: Scalars['Float']['output'];
  endIndex: Scalars['Float']['output'];
  endPage: Scalars['Float']['output'];
  pageSize: Scalars['Float']['output'];
  pages: Array<Scalars['Float']['output']>;
  startIndex: Scalars['Float']['output'];
  startPage: Scalars['Float']['output'];
  totalItems: Scalars['Float']['output'];
  totalPages: Scalars['Float']['output'];
};

export type PaginatedChatAuditLogResponse = {
  __typename?: 'PaginatedChatAuditLogResponse';
  items: Array<ChatAuditLog>;
  pager: Pager;
};

export type PaginatedCollectionResponse = {
  __typename?: 'PaginatedCollectionResponse';
  items: Array<Collection>;
  pager: Pager;
};

export type PaginatedMessageResponse = {
  __typename?: 'PaginatedMessageResponse';
  items: Array<Message>;
  pager: Pager;
};

export type PaginatedUploadResponse = {
  __typename?: 'PaginatedUploadResponse';
  items: Array<Upload>;
  pager: Pager;
};

export type PartialUserBase = {
  __typename?: 'PartialUserBase';
  administrator: Scalars['Boolean']['output'];
  avatar?: Maybe<Scalars['String']['output']>;
  bot: Scalars['Boolean']['output'];
  createdAt: Scalars['Date']['output'];
  id: Scalars['Float']['output'];
  moderator: Scalars['Boolean']['output'];
  username: Scalars['String']['output'];
};

export type PartialUserFriend = {
  __typename?: 'PartialUserFriend';
  administrator: Scalars['Boolean']['output'];
  avatar?: Maybe<Scalars['String']['output']>;
  blocked?: Maybe<Scalars['Boolean']['output']>;
  bot: Scalars['Boolean']['output'];
  createdAt: Scalars['Date']['output'];
  id: Scalars['Float']['output'];
  moderator: Scalars['Boolean']['output'];
  nameColor?: Maybe<Scalars['String']['output']>;
  nickname?: Maybe<FriendNickname>;
  status: UserStatus;
  username: Scalars['String']['output'];
};

export type PartialUserPublic = {
  __typename?: 'PartialUserPublic';
  administrator: Scalars['Boolean']['output'];
  autoCollectRules: AutoCollectRule;
  avatar?: Maybe<Scalars['String']['output']>;
  badges: Array<Badge>;
  banned: Scalars['Boolean']['output'];
  banner?: Maybe<Scalars['String']['output']>;
  bot: Scalars['Boolean']['output'];
  createdAt: Scalars['Date']['output'];
  description?: Maybe<Scalars['String']['output']>;
  domain: Array<Domain>;
  friend?: Maybe<FriendStatus>;
  friends?: Maybe<Array<Friend>>;
  id: Scalars['Float']['output'];
  insights: UserInsights;
  integrations: Array<Integration>;
  moderator: Scalars['Boolean']['output'];
  notifications: Array<Notification>;
  plan: Plan;
  platforms?: Maybe<Array<Platform>>;
  profileLayout?: Maybe<ProfileLayout>;
  publicProfile: Scalars['Boolean']['output'];
  quota: Scalars['Float']['output'];
  stats?: Maybe<Stats>;
  subscription: Array<TpuSubscription>;
  themeEngine?: Maybe<ThemeEngine>;
  username: Scalars['String']['output'];
  xp?: Maybe<Scalars['Float']['output']>;
};

export type PermissionsMetadata = {
  __typename?: 'PermissionsMetadata';
  configure: Scalars['Boolean']['output'];
  read: Scalars['Boolean']['output'];
  write: Scalars['Boolean']['output'];
};

export type Plan = {
  __typename?: 'Plan';
  color?: Maybe<Scalars['String']['output']>;
  /** @deprecated Plans are unused in TPUv2+. */
  features?: Maybe<Scalars['String']['output']>;
  icon: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  /** @deprecated Plans are unused in TPUv2+. */
  internalFeatures?: Maybe<Scalars['String']['output']>;
  internalName: Scalars['String']['output'];
  name: Scalars['String']['output'];
  /** @deprecated Plans are unused in TPUv2+. */
  price: Scalars['Float']['output'];
  /** @deprecated Plans are unused in TPUv2+. */
  purchasable: Scalars['Boolean']['output'];
  quotaMax: Scalars['Float']['output'];
};

export type Platform = {
  __typename?: 'Platform';
  id: Scalars['String']['output'];
  lastSeen: Scalars['String']['output'];
  platform: Scalars['String']['output'];
  status: Scalars['String']['output'];
};

export type Prefix = {
  __typename?: 'Prefix';
  commands: Array<LookupPrefix>;
  prefix: Scalars['String']['output'];
};

export type ProfileLayout = {
  __typename?: 'ProfileLayout';
  config: ProfileLayoutConfig;
  layout: ProfileLayoutObject;
  version: Scalars['Float']['output'];
};

export type ProfileLayoutColumn = {
  __typename?: 'ProfileLayoutColumn';
  rows: Array<ProfileLayoutComponent>;
};

export type ProfileLayoutColumnInput = {
  rows: Array<ProfileLayoutComponentInput>;
};

export type ProfileLayoutComponent = {
  __typename?: 'ProfileLayoutComponent';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  props?: Maybe<ProfileLayoutProps>;
};

export type ProfileLayoutComponentInput = {
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  props?: InputMaybe<ProfileLayoutPropsInput>;
};

export type ProfileLayoutConfig = {
  __typename?: 'ProfileLayoutConfig';
  containerMargin?: Maybe<Scalars['Float']['output']>;
  showStatsSidebar: Scalars['Boolean']['output'];
};

export type ProfileLayoutConfigInput = {
  containerMargin?: InputMaybe<Scalars['Float']['input']>;
  showStatsSidebar: Scalars['Boolean']['input'];
};

export type ProfileLayoutInput = {
  config: ProfileLayoutConfigInput;
  layout: ProfileLayoutObjectInput;
  version: Scalars['Float']['input'];
};

export type ProfileLayoutObject = {
  __typename?: 'ProfileLayoutObject';
  columns: Array<ProfileLayoutColumn>;
};

export type ProfileLayoutObjectInput = {
  columns: Array<ProfileLayoutColumnInput>;
};

export type ProfileLayoutPropLink = {
  __typename?: 'ProfileLayoutPropLink';
  color: Scalars['String']['output'];
  name: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type ProfileLayoutPropLinkInput = {
  color: Scalars['String']['input'];
  name: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type ProfileLayoutProps = {
  __typename?: 'ProfileLayoutProps';
  children?: Maybe<Array<ProfileLayoutComponent>>;
  display?: Maybe<Scalars['Float']['output']>;
  friendsOnly?: Maybe<Scalars['Boolean']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  links?: Maybe<Array<ProfileLayoutPropLink>>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ProfileLayoutPropsInput = {
  children?: InputMaybe<Array<ProfileLayoutComponentInput>>;
  display?: InputMaybe<Scalars['Float']['input']>;
  friendsOnly?: InputMaybe<Scalars['Boolean']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  links?: InputMaybe<Array<ProfileLayoutPropLinkInput>>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type Providers = {
  __typename?: 'Providers';
  anilist: Scalars['Boolean']['output'];
  lastfm: Scalars['Boolean']['output'];
  mal: Scalars['Boolean']['output'];
};

export type Query = {
  __typename?: 'Query';
  autoCollects: PaginatedCollectionResponse;
  availableChatPermissions: Array<ChatPermission>;
  blockedUsers: Array<BlockedUser>;
  chat: Chat;
  chatAuditLog: PaginatedChatAuditLogResponse;
  chatInvite?: Maybe<ChatInvite>;
  chats: Array<Chat>;
  collection?: Maybe<Collection>;
  collections?: Maybe<PaginatedCollectionResponse>;
  coreState: CoreState;
  currentUser?: Maybe<User>;
  domains: Array<Domain>;
  experiments: Array<ExperimentType>;
  friends: Array<Friend>;
  gallery: PaginatedUploadResponse;
  getAuthorizedApps: Array<OauthApp>;
  getMail: Scalars['JSON']['output'];
  lookupBotPrefix: Prefix;
  mailboxes: Array<ListResponse>;
  messages: Array<Message>;
  messagesPaged: PaginatedMessageResponse;
  note?: Maybe<Note>;
  oauthApp: OauthApp;
  oauthAppConsent: OauthConsentApp;
  oauthApps: Array<OauthApp>;
  setupStep: Scalars['Float']['output'];
  trackedUserIds: Array<Scalars['Float']['output']>;
  trackedUsers: Array<PartialUserFriend>;
  unreadMail: Scalars['Float']['output'];
  user?: Maybe<PartialUserPublic>;
  userEmoji: Array<ChatEmoji>;
  weather: Weather;
  workspaces: Array<Workspace>;
};


export type QueryAutoCollectsArgs = {
  input: UserCollectionsInput;
};


export type QueryChatArgs = {
  input: ChatInput;
};


export type QueryChatAuditLogArgs = {
  input: AuditLogInput;
};


export type QueryChatInviteArgs = {
  input: InviteInput;
};


export type QueryChatsArgs = {
  input?: InputMaybe<ChatsInput>;
};


export type QueryCollectionArgs = {
  input: CollectionInput;
};


export type QueryCollectionsArgs = {
  input?: InputMaybe<UserCollectionsInput>;
};


export type QueryFriendsArgs = {
  input?: InputMaybe<FriendsInput>;
};


export type QueryGalleryArgs = {
  input: GalleryInput;
};


export type QueryGetMailArgs = {
  input: GetMailInput;
};


export type QueryLookupBotPrefixArgs = {
  input: LookupPrefixInput;
};


export type QueryMessagesArgs = {
  input: InfiniteMessagesInput;
};


export type QueryMessagesPagedArgs = {
  input: PagedMessagesInput;
};


export type QueryNoteArgs = {
  input: NoteInput;
};


export type QueryOauthAppArgs = {
  input: MyAppInput;
};


export type QueryOauthAppConsentArgs = {
  input: MyAppInput;
};


export type QueryUserArgs = {
  input: UserProfileInput;
};

/** The category that the permission is categorized into for Communications ranks. */
export enum RankPermissionGroup {
  Admin = 'ADMIN',
  General = 'GENERAL',
  Manage = 'MANAGE',
  Options = 'OPTIONS'
}

export type RegisterCommand = {
  command: Scalars['String']['input'];
  description: Scalars['String']['input'];
};

export type RegisterInput = {
  email: Scalars['String']['input'];
  inviteKey?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type RegisterPrefix = {
  prefix: Scalars['String']['input'];
};

export type SaveNoteInput = {
  data: WorkspaceNoteInput;
  id: Scalars['Float']['input'];
  manualSave?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** The position to retrieve messages from based on the `offset`. */
export enum ScrollPosition {
  Bottom = 'BOTTOM',
  Top = 'TOP'
}

export type SearchModeInput = {
  mode: GallerySearchMode;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SendMessageInput = {
  associationId: Scalars['Float']['input'];
  attachments?: Array<Scalars['String']['input']>;
  content: Scalars['String']['input'];
  embeds?: InputMaybe<Array<EmbedInput>>;
  replyId?: InputMaybe<Scalars['Float']['input']>;
};

export type Session = {
  __typename?: 'Session';
  expiredAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id: Scalars['Float']['output'];
  info?: Maybe<SessionInfo>;
  name?: Maybe<Scalars['String']['output']>;
  oauthAppId?: Maybe<Scalars['String']['output']>;
  scopes: Scalars['String']['output'];
  type: Scalars['String']['output'];
  userId: Scalars['Float']['output'];
};

export type SessionInfo = {
  __typename?: 'SessionInfo';
  accessedFrom: Array<AccessedFrom>;
};

export type SetExperimentInput = {
  key: Scalars['String']['input'];
  /** Admin only. */
  userId?: InputMaybe<Scalars['Float']['input']>;
  value: Scalars['Float']['input'];
};

export type Star = {
  __typename?: 'Star';
  attachment: Upload;
  attachmentId: Scalars['Float']['output'];
  id: Scalars['Float']['output'];
  user: PartialUserBase;
  userId: Scalars['Float']['output'];
};

export type Stats = {
  __typename?: 'Stats';
  announcements: Scalars['Float']['output'];
  collectionItems: Scalars['Float']['output'];
  collections: Scalars['Float']['output'];
  docs: Scalars['Float']['output'];
  messageGraph: DataLabelsGraph;
  pulse: Scalars['Float']['output'];
  pulseGraph: DataLabelsGraph;
  pulses: Scalars['Float']['output'];
  uploadGraph: DataLabelsGraph;
  uploads: Scalars['Float']['output'];
  usage: Scalars['Float']['output'];
  users: Scalars['Float']['output'];
};

export type SubRule = {
  __typename?: 'SubRule';
  id: Scalars['Float']['output'];
  operator: Scalars['String']['output'];
  type: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type SubscriptionMetadata = {
  __typename?: 'SubscriptionMetadata';
  hours: Scalars['Float']['output'];
};

export type TpuSubscription = {
  __typename?: 'TPUSubscription';
  cancelled: Scalars['Boolean']['output'];
  cancelledAt: Scalars['DateTimeISO']['output'];
  expiredAt: Scalars['DateTimeISO']['output'];
  metadata: SubscriptionMetadata;
  paymentId: Scalars['Float']['output'];
  planId: Scalars['Float']['output'];
  price: Scalars['Float']['output'];
  user: PartialUserBase;
  userId: Scalars['Float']['output'];
};

export type ThemeEngine = {
  __typename?: 'ThemeEngine';
  baseTheme: Scalars['String']['output'];
  customCSS?: Maybe<Scalars['String']['output']>;
  defaults?: Maybe<ThemeEngineThemes>;
  deviceSync: Scalars['Boolean']['output'];
  fluidGradient: Scalars['Boolean']['output'];
  gradientOffset: Scalars['String']['output'];
  showOnProfile: Scalars['Boolean']['output'];
  theme: ThemeEngineThemes;
  version: Scalars['Float']['output'];
};

export type ThemeEngineColors = {
  __typename?: 'ThemeEngineColors';
  accent: Scalars['String']['output'];
  background: Scalars['String']['output'];
  background2: Scalars['String']['output'];
  card: Scalars['String']['output'];
  dark: Scalars['String']['output'];
  error: Scalars['String']['output'];
  gold: Scalars['String']['output'];
  info: Scalars['String']['output'];
  logo1: Scalars['String']['output'];
  logo2: Scalars['String']['output'];
  primary: Scalars['String']['output'];
  secondary: Scalars['String']['output'];
  sheet: Scalars['String']['output'];
  success: Scalars['String']['output'];
  text: Scalars['String']['output'];
  toolbar: Scalars['String']['output'];
  warning: Scalars['String']['output'];
};

export type ThemeEngineColorsInput = {
  accent: Scalars['String']['input'];
  background: Scalars['String']['input'];
  background2: Scalars['String']['input'];
  card: Scalars['String']['input'];
  dark: Scalars['String']['input'];
  error: Scalars['String']['input'];
  gold: Scalars['String']['input'];
  info: Scalars['String']['input'];
  logo1: Scalars['String']['input'];
  logo2: Scalars['String']['input'];
  primary: Scalars['String']['input'];
  secondary: Scalars['String']['input'];
  sheet: Scalars['String']['input'];
  success: Scalars['String']['input'];
  text: Scalars['String']['input'];
  toolbar: Scalars['String']['input'];
  warning: Scalars['String']['input'];
};

export type ThemeEngineInput = {
  baseTheme: Scalars['String']['input'];
  customCSS?: InputMaybe<Scalars['String']['input']>;
  defaults?: InputMaybe<ThemeEngineThemesInput>;
  deviceSync: Scalars['Boolean']['input'];
  fluidGradient: Scalars['Boolean']['input'];
  gradientOffset: Scalars['String']['input'];
  showOnProfile: Scalars['Boolean']['input'];
  theme: ThemeEngineThemesInput;
  version: Scalars['Float']['input'];
};

export type ThemeEngineTheme = {
  __typename?: 'ThemeEngineTheme';
  colors: ThemeEngineColors;
  dark?: Maybe<Scalars['Boolean']['output']>;
};

export type ThemeEngineThemeInput = {
  colors: ThemeEngineColorsInput;
  dark?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ThemeEngineThemes = {
  __typename?: 'ThemeEngineThemes';
  amoled: ThemeEngineTheme;
  dark: ThemeEngineTheme;
  light: ThemeEngineTheme;
};

export type ThemeEngineThemesInput = {
  amoled: ThemeEngineThemeInput;
  dark: ThemeEngineThemeInput;
  light: ThemeEngineThemeInput;
};

/** Whether the user should be added, or removed from the group. */
export enum ToggleUser {
  Add = 'ADD',
  Remove = 'REMOVE'
}

export type TransferOwnershipInput = {
  associationId: Scalars['Float']['input'];
  /** You may use either 2FA token or password to delete the chat. */
  password?: InputMaybe<Scalars['String']['input']>;
  /** TOTP/2FA code if enabled. You may use either 2FA token or password to delete the chat. */
  totp?: InputMaybe<Scalars['String']['input']>;
  /** User to transfer to. */
  userId: Scalars['Float']['input'];
};

export type UpdateAppInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  private: Scalars['Boolean']['input'];
  redirectUri?: InputMaybe<Scalars['String']['input']>;
  verified: Scalars['Boolean']['input'];
};

export type UpdateAppUserInput = {
  id: Scalars['String']['input'];
  manage: Scalars['Boolean']['input'];
  oauthAppId: Scalars['String']['input'];
};

export type UpdateChatInput = {
  associationId: Scalars['Float']['input'];
  /** Can only be null or undefined to unset or do not modify the group background respectively. Use the REST API to set one. */
  background?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** Can only be null or undefined to unset or do not modify the group icon respectively. Use the REST API to set one. */
  icon?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateEmojiInput = {
  associationId: Scalars['Float']['input'];
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type UpdateRank = {
  associationId: Scalars['Float']['input'];
  color?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissionsMap: Array<Scalars['String']['input']>;
  rankId: Scalars['String']['input'];
};

export type UpdateRankOrder = {
  associationId: Scalars['Float']['input'];
  /** Order if the rank, this is actually reversed from expected index value, so rankIds[0] is the highest priority rank. */
  rankIds: Array<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  darkTheme?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  discordPrecache?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  excludedCollections?: InputMaybe<Array<Scalars['Float']['input']>>;
  insights?: InputMaybe<Scalars['String']['input']>;
  itemsPerPage?: InputMaybe<Scalars['Float']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  nameColor?: InputMaybe<Scalars['String']['input']>;
  privacyPolicyAccepted?: InputMaybe<Scalars['Boolean']['input']>;
  profileLayout?: InputMaybe<ProfileLayoutInput>;
  publicProfile?: InputMaybe<Scalars['Boolean']['input']>;
  storedStatus?: InputMaybe<Scalars['String']['input']>;
  themeEngine?: InputMaybe<ThemeEngineInput>;
  username?: InputMaybe<Scalars['String']['input']>;
  weatherUnit?: InputMaybe<Scalars['String']['input']>;
};

export type Upload = {
  __typename?: 'Upload';
  attachment: Scalars['String']['output'];
  autoCollectApproval?: Maybe<AutoCollectApproval>;
  collections: Array<Collection>;
  createdAt: Scalars['Date']['output'];
  /** Non-deletable items are used for profile pictures, banners, etc and are not visible in the Gallery page. */
  deletable: Scalars['Boolean']['output'];
  fileSize: Scalars['Float']['output'];
  id: Scalars['Float']['output'];
  item?: Maybe<CollectionItem>;
  items: Array<CollectionItem>;
  name?: Maybe<Scalars['String']['output']>;
  originalFilename?: Maybe<Scalars['String']['output']>;
  starred?: Maybe<Star>;
  /** This is used for OCR scanned text from images. */
  textMetadata?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
  /** @deprecated URL redirects were removed in TPUv2/NEXT. */
  urlRedirect?: Maybe<Scalars['String']['output']>;
  user?: Maybe<PartialUserBase>;
  userId: Scalars['Float']['output'];
};

export type User = {
  __typename?: 'User';
  administrator: Scalars['Boolean']['output'];
  /** Ability to login with more then 1 password with different scopes. */
  alternatePasswords?: Maybe<Array<AlternatePassword>>;
  autoCollectRules: Array<AutoCollectRule>;
  avatar?: Maybe<Scalars['String']['output']>;
  badges: Array<Badge>;
  banned: Scalars['Boolean']['output'];
  /** UserV2 banner. */
  banner?: Maybe<Scalars['String']['output']>;
  /** Whether the user is a bot user. */
  bot: Scalars['Boolean']['output'];
  createdAt: Scalars['Date']['output'];
  darkTheme: Scalars['Boolean']['output'];
  description?: Maybe<Scalars['String']['output']>;
  discordPrecache: Scalars['Boolean']['output'];
  domain?: Maybe<Domain>;
  domainId: Scalars['Float']['output'];
  email: Scalars['String']['output'];
  emailVerified: Scalars['Boolean']['output'];
  /** Collections that are excluded from the Collections filter in Gallery. */
  excludedCollections?: Maybe<Array<Scalars['Float']['output']>>;
  experiments?: Maybe<Array<Experiment>>;
  /** @deprecated Fake paths are no longer available as of TPUv2/NEXT. */
  fakePath?: Maybe<Scalars['String']['output']>;
  friend: FriendStatus;
  friends: Array<Friend>;
  id: Scalars['Float']['output'];
  insights: UserInsights;
  integrations: Array<Integration>;
  /** @deprecated Invisible URLs are no longer available as of TPUv2/NEXT. */
  invisibleURLs: Scalars['Boolean']['output'];
  inviteId?: Maybe<Scalars['Float']['output']>;
  itemsPerPage: Scalars['Float']['output'];
  language: Scalars['String']['output'];
  moderator: Scalars['Boolean']['output'];
  /** The user's name color in Communications. */
  nameColor?: Maybe<Scalars['String']['output']>;
  nickname?: Maybe<Array<FriendNickname>>;
  notifications: Array<Notification>;
  oauthAppId?: Maybe<Scalars['String']['output']>;
  /** How many AutoCollect approvals the user needs to approve/reject. */
  pendingAutoCollects?: Maybe<Scalars['Float']['output']>;
  plan?: Maybe<Plan>;
  privacyPolicyAccepted?: Maybe<Scalars['Boolean']['output']>;
  profileLayout: ProfileLayout;
  publicProfile: Scalars['Boolean']['output'];
  /** How much the user has uploaded in bytes. */
  quota: Scalars['Float']['output'];
  /** The user's scopes assigned to the API key used. In format like `user.view,user.modify` which belong to `Scope`. */
  scopes?: Maybe<Scalars['String']['output']>;
  sessions: Array<Session>;
  stats?: Maybe<Stats>;
  /** User status/presence shown to other users. */
  status: UserStatus;
  /** User status/presence that has `invisible` and is shown to the current user. */
  storedStatus: UserStoredStatus;
  /** @deprecated Subdomains are no longer available as of TPUv2/NEXT. */
  subdomainId?: Maybe<Scalars['Float']['output']>;
  subscription?: Maybe<TpuSubscription>;
  /** Subscriptions are no longer used as they were in TPUv1, and are now used to store metadata for permanent Gold subscriptions. */
  subscriptionId?: Maybe<Scalars['Float']['output']>;
  themeEngine?: Maybe<ThemeEngine>;
  /** @deprecated Replaced with `themeEngine`, used in legacy clients such as legacy.privateuploader.com. */
  themeId: Scalars['Float']['output'];
  totpEnable: Scalars['Boolean']['output'];
  updatedAt: Scalars['Date']['output'];
  /** @deprecated Hidden upload usernames are no longer available as of TPUv2/NEXT. */
  uploadNameHidden: Scalars['Boolean']['output'];
  username: Scalars['String']['output'];
  weatherUnit: Scalars['String']['output'];
  /** How much the user has donated to PrivateUploader. (Likely unused in unofficial instances.) */
  xp: Scalars['Float']['output'];
};

export type UserCollectionsInput = {
  filter?: Array<CollectionFilter>;
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
};

/** Insights privacy preference. */
export enum UserInsights {
  Everyone = 'EVERYONE',
  Friends = 'FRIENDS',
  Nobody = 'NOBODY'
}

export type UserProfileInput = {
  id?: InputMaybe<Scalars['Float']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** User status/presence shown to other users. */
export enum UserStatus {
  Busy = 'BUSY',
  Idle = 'IDLE',
  Offline = 'OFFLINE',
  Online = 'ONLINE',
  Unknown = 'UNKNOWN'
}

/** User status/presence that has `invisible` and is shown to the current user. */
export enum UserStoredStatus {
  Busy = 'BUSY',
  Idle = 'IDLE',
  Invisible = 'INVISIBLE',
  Online = 'ONLINE'
}

export type Weather = {
  __typename?: 'Weather';
  cached?: Maybe<Scalars['Boolean']['output']>;
  clouds?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['Boolean']['output']>;
  feels_like?: Maybe<Scalars['Float']['output']>;
  humidity?: Maybe<Scalars['Float']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  main?: Maybe<Scalars['String']['output']>;
  pressure?: Maybe<Scalars['Float']['output']>;
  temp?: Maybe<Scalars['Float']['output']>;
  temp_max?: Maybe<Scalars['Float']['output']>;
  temp_min?: Maybe<Scalars['Float']['output']>;
  visibility?: Maybe<Scalars['Float']['output']>;
  wind_deg?: Maybe<Scalars['Float']['output']>;
  wind_speed?: Maybe<Scalars['Float']['output']>;
};

export type Workspace = {
  __typename?: 'Workspace';
  createdAt: Scalars['Date']['output'];
  folders: Array<WorkspaceFolder>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
  user: PartialUserBase;
  userId: Scalars['Float']['output'];
  users: Array<WorkspaceUser>;
};

export type WorkspaceFolder = {
  __typename?: 'WorkspaceFolder';
  children: Array<Note>;
  createdAt: Scalars['Date']['output'];
  folderId?: Maybe<Scalars['Float']['output']>;
  id: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
  workspace: Workspace;
  workspaceId: Scalars['Float']['output'];
};

/** The type of workspace item */
export enum WorkspaceItemType {
  Folder = 'FOLDER',
  Note = 'NOTE',
  Workspace = 'WORKSPACE'
}

export type WorkspaceNote = {
  __typename?: 'WorkspaceNote';
  blocks?: Maybe<Scalars['JSON']['output']>;
  time?: Maybe<Scalars['Float']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type WorkspaceNoteInput = {
  blocks?: InputMaybe<Scalars['JSON']['input']>;
  time?: InputMaybe<Scalars['Float']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type WorkspaceNoteMetadata = {
  __typename?: 'WorkspaceNoteMetadata';
  version?: Maybe<Scalars['String']['output']>;
};

export type WorkspaceUser = {
  __typename?: 'WorkspaceUser';
  accepted: Scalars['Boolean']['output'];
  configure: Scalars['Boolean']['output'];
  createdAt: Scalars['Date']['output'];
  id: Scalars['Float']['output'];
  /** The unique identifier between the User and the Workspace. */
  identifier?: Maybe<Scalars['String']['output']>;
  read: Scalars['Boolean']['output'];
  recipientId: Scalars['Float']['output'];
  sender: PartialUserBase;
  senderId: Scalars['Float']['output'];
  updatedAt: Scalars['Date']['output'];
  user: PartialUserBase;
  workspace: Workspace;
  workspaceId: Scalars['Float']['output'];
  write: Scalars['Boolean']['output'];
};

export type SendMessageMutationVariables = Exact<{
  input: SendMessageInput;
}>;


export type SendMessageMutation = { __typename?: 'Mutation', sendMessage: { __typename?: 'Message', id: number } };

export type RegisterBotCommandMutationVariables = Exact<{
  input: RegisterCommand;
}>;


export type RegisterBotCommandMutation = { __typename?: 'Mutation', registerBotCommand: { __typename?: 'GenericSuccessObject', success: boolean } };

export type RegisterBotPrefixMutationVariables = Exact<{
  input: RegisterPrefix;
}>;


export type RegisterBotPrefixMutation = { __typename?: 'Mutation', registerBotPrefix: { __typename?: 'GenericSuccessObject', success: boolean } };


export const SendMessageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SendMessage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SendMessageInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sendMessage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<SendMessageMutation, SendMessageMutationVariables>;
export const RegisterBotCommandDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RegisterBotCommand"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RegisterCommand"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"registerBotCommand"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<RegisterBotCommandMutation, RegisterBotCommandMutationVariables>;
export const RegisterBotPrefixDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RegisterBotPrefix"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RegisterPrefix"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"registerBotPrefix"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<RegisterBotPrefixMutation, RegisterBotPrefixMutationVariables>;