# Changelog

## [0.11.0](https://github.com/luhong123/filecoin-pin/compare/v0.10.1...v0.11.0) (2025-10-31)


### Features

* add `filecoin-pin payments setup` (and more) ([#16](https://github.com/luhong123/filecoin-pin/issues/16)) ([08400c4](https://github.com/luhong123/filecoin-pin/commit/08400c4835aa075b4e940dba9f7bd242dbe74479))
* add commander CLI parsing, s/daemon/server, improve docs ([3c66065](https://github.com/luhong123/filecoin-pin/commit/3c66065b7ca76e7c944ca2a22a17092b4d650b86))
* add data-set command ([#50](https://github.com/luhong123/filecoin-pin/issues/50)) ([8b83a02](https://github.com/luhong123/filecoin-pin/commit/8b83a022432f0fd2fc12a0117e565265273b2fbd))
* add more details to upload-flow ([#169](https://github.com/luhong123/filecoin-pin/issues/169)) ([9ab3f8c](https://github.com/luhong123/filecoin-pin/commit/9ab3f8c110ce0b6c6bf21c1fcdbcf84ade557953))
* add session key authentication support ([#103](https://github.com/luhong123/filecoin-pin/issues/103)) ([8ef8261](https://github.com/luhong123/filecoin-pin/commit/8ef82615c76924d7e154dd3f00126d94c385c180))
* add support for warm storage (env var only) and provider selection ([#102](https://github.com/luhong123/filecoin-pin/issues/102)) ([7f8eca9](https://github.com/luhong123/filecoin-pin/commit/7f8eca9b94bde227edc29a8b7b7830e0b14eacd3))
* **add:** implement `add` command with unixfs packing for single file ([690e06b](https://github.com/luhong123/filecoin-pin/commit/690e06b5cc2a9d4334626aa0aff2c2c9dcfae3be))
* **add:** support whole directory adding ([69c9067](https://github.com/luhong123/filecoin-pin/commit/69c90672e8f18e1f4f8a61e0e65893144c228eac))
* **add:** wrap file in directory by default, opt-out with --bare ([316237b](https://github.com/luhong123/filecoin-pin/commit/316237bc4362f2afb14cdcd16f7283ee10a4e455))
* allow overriding provider ([#53](https://github.com/luhong123/filecoin-pin/issues/53)) ([70681de](https://github.com/luhong123/filecoin-pin/commit/70681de574e0ac4a4619efa499af81086ac2da6f))
* allow overriding withCDN via env-var ([#55](https://github.com/luhong123/filecoin-pin/issues/55)) ([0a89ca8](https://github.com/luhong123/filecoin-pin/commit/0a89ca8f9a8b30fccb5df51be926d84258f8afe8))
* check payments status on import command ([91b5628](https://github.com/luhong123/filecoin-pin/commit/91b56284a25e186cf69d3c4e03fbd474073c95ba))
* create re-usable github action ([#60](https://github.com/luhong123/filecoin-pin/issues/60)) ([aa6b9bf](https://github.com/luhong123/filecoin-pin/commit/aa6b9bfc957bc59621606c1bad7e1a676b7fddaf))
* filecoin-pin import /path/to/car ([#26](https://github.com/luhong123/filecoin-pin/issues/26)) ([d607af8](https://github.com/luhong123/filecoin-pin/commit/d607af82eeae1c5940b17abfbc2b6ecb7f34ecc0))
* make WarmStorage approvals infinite, focus only on deposit ([#47](https://github.com/luhong123/filecoin-pin/issues/47)) ([1064d78](https://github.com/luhong123/filecoin-pin/commit/1064d78b86fa55a3d1b850a898703683a1172700))
* provide lib access via import from 'filecoin-pin/core' ([#82](https://github.com/luhong123/filecoin-pin/issues/82)) ([066c66b](https://github.com/luhong123/filecoin-pin/commit/066c66b7b4660a62fa74ec6c8b25b620c2d7b09e))
* status,deposit,withdraw cmds ([#52](https://github.com/luhong123/filecoin-pin/issues/52)) ([278ed5a](https://github.com/luhong123/filecoin-pin/commit/278ed5a5ae54aa8cc068083e0a884fdebebf5fdf))
* synapse integration ([70e3c17](https://github.com/luhong123/filecoin-pin/commit/70e3c175e69c54fe5a503bfbb34f4a68f6d646fe))
* update deps; adapt to latest synapse-sdk; integrate biome ([b543926](https://github.com/luhong123/filecoin-pin/commit/b543926a47c92a43eabe724993036f81a7008c0f))


### Bug Fixes

* **action:** use fileSize to determine capacity when spendrate=0 ([#132](https://github.com/luhong123/filecoin-pin/issues/132)) ([f498169](https://github.com/luhong123/filecoin-pin/commit/f498169d3a304af14a8bdfef70544758640127ac))
* add auto-fund option ([#79](https://github.com/luhong123/filecoin-pin/issues/79)) ([c1e2f72](https://github.com/luhong123/filecoin-pin/commit/c1e2f72a2d7dfd4ae78c305063e9feb277fe3da9))
* add signer support to initializeSynapse ([#172](https://github.com/luhong123/filecoin-pin/issues/172)) ([1d5988a](https://github.com/luhong123/filecoin-pin/commit/1d5988a8e2a6115025f285ffa76923c62e5d25dd))
* avoid empty-directory block in directory CAR ([#85](https://github.com/luhong123/filecoin-pin/issues/85)) ([53fc7df](https://github.com/luhong123/filecoin-pin/commit/53fc7df58e5c31bfc72dd13e108d376ce7fdd2a4))
* build cars in the browser ([#83](https://github.com/luhong123/filecoin-pin/issues/83)) ([4ec9a0f](https://github.com/luhong123/filecoin-pin/commit/4ec9a0f97a6f5763fa441c6b126f43f280673247))
* check ipni advertisement during upload ([#183](https://github.com/luhong123/filecoin-pin/issues/183)) ([b020a42](https://github.com/luhong123/filecoin-pin/commit/b020a42803dfaaf7945c32e52a6e83bf5d2b20dc))
* **ci:** handle duplicate items in add-to-project workflow ([#184](https://github.com/luhong123/filecoin-pin/issues/184)) ([0e80256](https://github.com/luhong123/filecoin-pin/commit/0e802564065b9139e36e860874a320f4c043f924))
* cli supports session-key & wallet options ([#105](https://github.com/luhong123/filecoin-pin/issues/105)) ([e362531](https://github.com/luhong123/filecoin-pin/commit/e362531ccd17661c3ae745ef6c82939c740f6fbf))
* configure release-please tags ([06bf6bc](https://github.com/luhong123/filecoin-pin/commit/06bf6bc9589cf6d293ca7deeb9afc0ea7bbc72c4))
* createStorageContext supports multi-tenancy ([#93](https://github.com/luhong123/filecoin-pin/issues/93)) ([d47d3f3](https://github.com/luhong123/filecoin-pin/commit/d47d3f3f633e0972f21db3fe2153c49b4827a242))
* deposit allows passing days or amount ([#72](https://github.com/luhong123/filecoin-pin/issues/72)) ([f34c8e5](https://github.com/luhong123/filecoin-pin/commit/f34c8e5f362ad6726090a87d88a5c7c7362f8471))
* gh-action lints and typechecks on core changes ([#170](https://github.com/luhong123/filecoin-pin/issues/170)) ([107a023](https://github.com/luhong123/filecoin-pin/commit/107a0239877bc64fee8e43d35040e8209ae652eb))
* lint failures on extension names ([#70](https://github.com/luhong123/filecoin-pin/issues/70)) ([4429e7a](https://github.com/luhong123/filecoin-pin/commit/4429e7acb912a9a86ad870779d161639fe6ee710))
* log level defaults to error for CLI ([#128](https://github.com/luhong123/filecoin-pin/issues/128)) ([cf851e5](https://github.com/luhong123/filecoin-pin/commit/cf851e547d33191566b9e45e7eef8e2746c9ab55))
* make output consistent, reduce duplication ([bd97854](https://github.com/luhong123/filecoin-pin/commit/bd97854f27132ed187a9f78eeb04c14ba662dd32))
* more ethers.js cleanup silencing ([#144](https://github.com/luhong123/filecoin-pin/issues/144)) ([785af4a](https://github.com/luhong123/filecoin-pin/commit/785af4ad6996f77afa9cebdc5fc66df866f5b089))
* pass metadata through to executeUpload ([#89](https://github.com/luhong123/filecoin-pin/issues/89)) ([300ecd5](https://github.com/luhong123/filecoin-pin/commit/300ecd58f4132410c401a2dae45073975d98e9a2))
* payments setup script no longer hangs ([#32](https://github.com/luhong123/filecoin-pin/issues/32)) ([688389f](https://github.com/luhong123/filecoin-pin/commit/688389f5e57d68ed1f46dba37463343a7e1fde31))
* payments storage pricing consistency ([b859bcb](https://github.com/luhong123/filecoin-pin/commit/b859bcbc99cce48f5dc1b9f1c2dc8ca8691cda94))
* prevent some checks when using session key ([#110](https://github.com/luhong123/filecoin-pin/issues/110)) ([987c4cb](https://github.com/luhong123/filecoin-pin/commit/987c4cb6a64a4b23730bef4699cc497b012d9132))
* re-use upload-action PR comment ([#126](https://github.com/luhong123/filecoin-pin/issues/126)) ([e1cf5ec](https://github.com/luhong123/filecoin-pin/commit/e1cf5ec51f0b8853996e9fa3abbc2b6ed934681f)), closes [#99](https://github.com/luhong123/filecoin-pin/issues/99)
* release-please config ([54f0bdc](https://github.com/luhong123/filecoin-pin/commit/54f0bdce2b65d4153ca2e1d3a048849c190ee76e))
* storage calculations are accurate and precise ([#36](https://github.com/luhong123/filecoin-pin/issues/36)) ([cc56cc1](https://github.com/luhong123/filecoin-pin/commit/cc56cc1ab1cfbf039f2f323498a6230f5d0dc5f1))
* tweak payments language, fix minor flow issues ([#22](https://github.com/luhong123/filecoin-pin/issues/22)) ([3a1d187](https://github.com/luhong123/filecoin-pin/commit/3a1d187f2f8f848cbc52c2316deab4fa3641aead))
* upgrade to latest synapse-sdk ([#115](https://github.com/luhong123/filecoin-pin/issues/115)) ([c99e370](https://github.com/luhong123/filecoin-pin/commit/c99e37036931d054c4127d44d10022a9e243a000))
* upload-action provider overriding ([#116](https://github.com/luhong123/filecoin-pin/issues/116)) ([5a59dac](https://github.com/luhong123/filecoin-pin/commit/5a59dac8c27a0b2ef1e1d6b517df1d061a507ce0))
* use correct addresses with session key auth ([#107](https://github.com/luhong123/filecoin-pin/issues/107)) ([9e05746](https://github.com/luhong123/filecoin-pin/commit/9e057464461589edf3cb0a8cd57857ebea1c6b12))
* use only ipni-enabled providers ([#109](https://github.com/luhong123/filecoin-pin/issues/109)) ([f642d6e](https://github.com/luhong123/filecoin-pin/commit/f642d6e6641a6d467eb11c0fbece46a9dcd7c4fc))
* use parseCLIAuth in add and import, add --warm-storage-address ([#123](https://github.com/luhong123/filecoin-pin/issues/123)) ([76bb790](https://github.com/luhong123/filecoin-pin/commit/76bb7909a16346ac0ca9a70f6a26cb69d5dc805f))
* ux friendly payment funds subcommand ([#75](https://github.com/luhong123/filecoin-pin/issues/75)) ([837879b](https://github.com/luhong123/filecoin-pin/commit/837879b8f23a49a62dd2c9ac3c5d33b8bd3ae79c))
* withCDN data set creation ([#145](https://github.com/luhong123/filecoin-pin/issues/145)) ([86c839f](https://github.com/luhong123/filecoin-pin/commit/86c839f74b456279b9ffc9bdc89f6b0819413761))


### Chores

* add dependabot and CI lint & test ([391c82a](https://github.com/luhong123/filecoin-pin/commit/391c82af55a744d852d33e39ab8ac4bef7695ae3))
* add package-lock.json ([79510d7](https://github.com/luhong123/filecoin-pin/commit/79510d7ad4b3a547b72f162d76a5c34c2f693a2b))
* add release-please ([#13](https://github.com/luhong123/filecoin-pin/issues/13)) ([d88b3af](https://github.com/luhong123/filecoin-pin/commit/d88b3afd52c2110919cab517452bb59b11d8738d))
* add release-please manifest ([324be69](https://github.com/luhong123/filecoin-pin/commit/324be69bed0206ac5f2b76580e247b15cbc0a3d5))
* **deps-dev:** bump @biomejs/biome from 2.2.5 to 2.2.6 ([#112](https://github.com/luhong123/filecoin-pin/issues/112)) ([e8c4ce5](https://github.com/luhong123/filecoin-pin/commit/e8c4ce5221c5845601f20e38ec8b9980b4734492))
* **deps-dev:** bump @biomejs/biome from 2.2.6 to 2.2.7 ([#150](https://github.com/luhong123/filecoin-pin/issues/150)) ([c29f2e6](https://github.com/luhong123/filecoin-pin/commit/c29f2e674c15779d6980afe761647b568566763b))
* **deps:** bump @clack/prompts from 0.8.2 to 0.11.0 ([#21](https://github.com/luhong123/filecoin-pin/issues/21)) ([b1b06dc](https://github.com/luhong123/filecoin-pin/commit/b1b06dc87a75adafe7cd5afa9f51e732a678e24a))
* **deps:** bump @filoz/synapse-sdk from 0.28.0 to 0.29.3 ([#63](https://github.com/luhong123/filecoin-pin/issues/63)) ([48246ea](https://github.com/luhong123/filecoin-pin/commit/48246ea198261929520c73a7ce4aefe5ad6e3b54))
* **deps:** bump @filoz/synapse-sdk from 0.33.0 to 0.34.0 ([#149](https://github.com/luhong123/filecoin-pin/issues/149)) ([e9b7f07](https://github.com/luhong123/filecoin-pin/commit/e9b7f07dd4de3e771828d0ce5073e4fba3c9b544))
* **deps:** bump @helia/unixfs from 5.1.0 to 6.0.1 ([#94](https://github.com/luhong123/filecoin-pin/issues/94)) ([5ceb925](https://github.com/luhong123/filecoin-pin/commit/5ceb9250ff468c5001aa3a22b2987787d661e10f))
* **deps:** bump actions/setup-node from 5 to 6 ([#121](https://github.com/luhong123/filecoin-pin/issues/121)) ([ebaabd6](https://github.com/luhong123/filecoin-pin/commit/ebaabd6951bad7329d004dfc5498eb2f2e97dcdc))
* **deps:** bump pino from 9.13.1 to 10.0.0 ([#64](https://github.com/luhong123/filecoin-pin/issues/64)) ([f7f84d1](https://github.com/luhong123/filecoin-pin/commit/f7f84d1b59732ac42807f8456261491eac6ab526))
* **dev:** fix biome version ([#77](https://github.com/luhong123/filecoin-pin/issues/77)) ([dbf14be](https://github.com/luhong123/filecoin-pin/commit/dbf14be0ec0b52b88dd8282cf03b180ca67a370b))
* **docs:** add npm badge ([aa1d504](https://github.com/luhong123/filecoin-pin/commit/aa1d504e2623f31e86dfa8cceb73ba33f946430c))
* **docs:** agents context file ([#139](https://github.com/luhong123/filecoin-pin/issues/139)) ([7c610a3](https://github.com/luhong123/filecoin-pin/commit/7c610a329ef6feb64048e2a3e69fc9e43a762610))
* **docs:** make README more accurate for current state ([#119](https://github.com/luhong123/filecoin-pin/issues/119)) ([dd0869b](https://github.com/luhong123/filecoin-pin/commit/dd0869b19de1ca5ec6890e03a6a30efba3e9a997))
* **docs:** update installation & dev instructions ([0abc20f](https://github.com/luhong123/filecoin-pin/commit/0abc20fa7effef59203ebcd86ca6a534fcb662ae))
* **docs:** update README with more info on "how it works" ([#1](https://github.com/luhong123/filecoin-pin/issues/1)) ([b53eb96](https://github.com/luhong123/filecoin-pin/commit/b53eb9669ee9e8ddd10d57c3083e43fac63a5582))
* initialise changelog for release-please ([f567476](https://github.com/luhong123/filecoin-pin/commit/f567476beb126ac8effb2e0d96d644472eefc89a))
* **master:** release 0.10.0 ([#138](https://github.com/luhong123/filecoin-pin/issues/138)) ([b86a5b7](https://github.com/luhong123/filecoin-pin/commit/b86a5b7265cb2b9bec168bc9c31f9da9cbaaded3))
* **master:** release 0.10.1 ([#164](https://github.com/luhong123/filecoin-pin/issues/164)) ([7465dde](https://github.com/luhong123/filecoin-pin/commit/7465dde3f267ef3ef120e07048461008c66339e2))
* **master:** release 0.2.0 ([#20](https://github.com/luhong123/filecoin-pin/issues/20)) ([26e8a1e](https://github.com/luhong123/filecoin-pin/commit/26e8a1ea601fd612c305cc47a1ae043f8e1e4406))
* **master:** release 0.2.1 ([#23](https://github.com/luhong123/filecoin-pin/issues/23)) ([fe6c342](https://github.com/luhong123/filecoin-pin/commit/fe6c342bcecc02802ea5bcf329cbc89247dd893a))
* **master:** release 0.2.2 ([d94bfeb](https://github.com/luhong123/filecoin-pin/commit/d94bfeb48cfa448dbed3cca051424e61a6568fb8))
* **master:** release 0.3.0 ([#27](https://github.com/luhong123/filecoin-pin/issues/27)) ([4985d57](https://github.com/luhong123/filecoin-pin/commit/4985d57d4139e753fe6ff2c852a19721a519fec1))
* **master:** release 0.4.0 ([b7b235c](https://github.com/luhong123/filecoin-pin/commit/b7b235c5d093c532a22b883ece6955f2dd2904dc))
* **master:** release 0.4.1 ([#33](https://github.com/luhong123/filecoin-pin/issues/33)) ([f7ee9f6](https://github.com/luhong123/filecoin-pin/commit/f7ee9f67360b92826a39ba0e8baaba6ac519f124))
* **master:** release 0.5.0 ([40329d1](https://github.com/luhong123/filecoin-pin/commit/40329d1f2d88060171aa5d3f1d5f3ea39512bc0c))
* **master:** release 0.6.0 ([#51](https://github.com/luhong123/filecoin-pin/issues/51)) ([910b09a](https://github.com/luhong123/filecoin-pin/commit/910b09a5ea95ee1e45feb2913657e5863bc45cb1))
* **master:** release 0.7.0 ([#71](https://github.com/luhong123/filecoin-pin/issues/71)) ([542f0ac](https://github.com/luhong123/filecoin-pin/commit/542f0ac72536e82aca4f4cd9ea49aeff4cfd7a67))
* **master:** release 0.7.1 ([#86](https://github.com/luhong123/filecoin-pin/issues/86)) ([4ef8542](https://github.com/luhong123/filecoin-pin/commit/4ef8542a860a2ac245a8e994438ccdaa86d8b8a4))
* **master:** release 0.7.2 ([#88](https://github.com/luhong123/filecoin-pin/issues/88)) ([1a7507a](https://github.com/luhong123/filecoin-pin/commit/1a7507a6d1b6067ac51e78e86825c008609975da))
* **master:** release 0.7.3 ([#90](https://github.com/luhong123/filecoin-pin/issues/90)) ([d048ae2](https://github.com/luhong123/filecoin-pin/commit/d048ae2463fa6d7ec1d5abfbe528f43c39a1b73d))
* **master:** release 0.8.0 ([#98](https://github.com/luhong123/filecoin-pin/issues/98)) ([fad8664](https://github.com/luhong123/filecoin-pin/commit/fad8664ac5a9c3ca192d8e2f9b7a74f268363cf9))
* **master:** release 0.8.1 ([#108](https://github.com/luhong123/filecoin-pin/issues/108)) ([cbce9b6](https://github.com/luhong123/filecoin-pin/commit/cbce9b609e9aed6fe244eef0e8529ca393e9067d))
* **master:** release 0.9.0 ([#113](https://github.com/luhong123/filecoin-pin/issues/113)) ([287fee7](https://github.com/luhong123/filecoin-pin/commit/287fee7209699f58226020ff50f22b7cf3d3b0ee))
* **master:** release 0.9.1 ([#117](https://github.com/luhong123/filecoin-pin/issues/117)) ([2a8d3eb](https://github.com/luhong123/filecoin-pin/commit/2a8d3eb5454724b1ff24c74a284ab48b3173f237))
* **master:** release 0.9.2 ([#133](https://github.com/luhong123/filecoin-pin/issues/133)) ([52f1985](https://github.com/luhong123/filecoin-pin/commit/52f19851f1b86f29e4ae67ebd7d390fd5ecb366a))
* misc cleanups and refactoring ([afc19ae](https://github.com/luhong123/filecoin-pin/commit/afc19ae17f5b03e534ec5d747ba1212fba7e613e))
* move to the version of synapse-sdk on `next` branch ([#146](https://github.com/luhong123/filecoin-pin/issues/146)) ([528c6fa](https://github.com/luhong123/filecoin-pin/commit/528c6fac57d7582c77332c097058946a9d9852d2))
* **payments:** if no actions taken, print appropriate msg ([#34](https://github.com/luhong123/filecoin-pin/issues/34)) ([1b66655](https://github.com/luhong123/filecoin-pin/commit/1b6665513bddf354854581db0b67d8dcc1706380))
* rearrange Synapse use to improve educational value ([#28](https://github.com/luhong123/filecoin-pin/issues/28)) ([5eac7ef](https://github.com/luhong123/filecoin-pin/commit/5eac7ef00b8812b848f5358a9a147bce64b56c3f))
* remove package-lock ([224f3f4](https://github.com/luhong123/filecoin-pin/commit/224f3f4f17ce63731f4bc17ce26857d0a6502d37))
* s/FilOzone/filecoin-project ([#163](https://github.com/luhong123/filecoin-pin/issues/163)) ([0277e4d](https://github.com/luhong123/filecoin-pin/commit/0277e4de167e575e6ac2104da692b69b28d9af27))
* update release-please config to be more comprehensive ([#29](https://github.com/luhong123/filecoin-pin/issues/29)) ([647e673](https://github.com/luhong123/filecoin-pin/commit/647e673b9113a9fe7c77ff0932c8db80aec40584))
* use size constants, add tests, enable coverage ([#35](https://github.com/luhong123/filecoin-pin/issues/35)) ([9aab57f](https://github.com/luhong123/filecoin-pin/commit/9aab57fae4e17ab702c12079eca3d82a7307b5c4))


### Documentation

* action example selects a random known good SP ([#125](https://github.com/luhong123/filecoin-pin/issues/125)) ([a23093b](https://github.com/luhong123/filecoin-pin/commit/a23093ba1988f7d071b0141aee81bf4389b3c3b4))
* **action:** Fix GitHub action version references from [@v1](https://github.com/v1) to [@v0](https://github.com/v0) ([#131](https://github.com/luhong123/filecoin-pin/issues/131)) ([2408783](https://github.com/luhong123/filecoin-pin/commit/240878373af58a66012e1e8287dd00fc6431a2e0))
* **action:** streamline README and remove duplication ([#136](https://github.com/luhong123/filecoin-pin/issues/136)) ([2d2b742](https://github.com/luhong123/filecoin-pin/commit/2d2b7428e01630c25e3da2db5de5c5c0df7a76df))
* **action:** Update Filecoin Pin Github Action README.md ([#118](https://github.com/luhong123/filecoin-pin/issues/118)) ([0df2e25](https://github.com/luhong123/filecoin-pin/commit/0df2e2558cb74a447aa2195950d34ab810a9da1c))
* add CONTRIBUTING.md and AGENTS.md ([#134](https://github.com/luhong123/filecoin-pin/issues/134)) ([5c204ed](https://github.com/luhong123/filecoin-pin/commit/5c204ed1f00eb2db16676225ad6e7b37c8e7af23))
* link to more examples ([#181](https://github.com/luhong123/filecoin-pin/issues/181)) ([849b333](https://github.com/luhong123/filecoin-pin/commit/849b333b0ccb6ed2f7c0389f0ed12f239a13cdae))
* **readme:** restructure and clarify project overview ([#124](https://github.com/luhong123/filecoin-pin/issues/124)) ([b3ce025](https://github.com/luhong123/filecoin-pin/commit/b3ce0258007d83d7f472fc85835d8e54eda7c033))
* use synapse integration as an exercise in documenting best practice ([b5207a8](https://github.com/luhong123/filecoin-pin/commit/b5207a843909176ce7b04aeaf4c0b2aadc0370d4))

## [0.10.1](https://github.com/filecoin-project/filecoin-pin/compare/v0.10.0...v0.10.1) (2025-10-27)


### Chores

* s/FilOzone/filecoin-project ([#163](https://github.com/filecoin-project/filecoin-pin/issues/163)) ([0277e4d](https://github.com/filecoin-project/filecoin-pin/commit/0277e4de167e575e6ac2104da692b69b28d9af27))

## [0.10.0](https://github.com/filecoin-project/filecoin-pin/compare/v0.9.2...v0.10.0) (2025-10-27)


### Features

* allow overriding withCDN via env-var ([#55](https://github.com/filecoin-project/filecoin-pin/issues/55)) ([0a89ca8](https://github.com/filecoin-project/filecoin-pin/commit/0a89ca8f9a8b30fccb5df51be926d84258f8afe8))


### Bug Fixes

* more ethers.js cleanup silencing ([#144](https://github.com/filecoin-project/filecoin-pin/issues/144)) ([785af4a](https://github.com/filecoin-project/filecoin-pin/commit/785af4ad6996f77afa9cebdc5fc66df866f5b089))
* withCDN data set creation ([#145](https://github.com/filecoin-project/filecoin-pin/issues/145)) ([86c839f](https://github.com/filecoin-project/filecoin-pin/commit/86c839f74b456279b9ffc9bdc89f6b0819413761))


### Chores

* **deps-dev:** bump @biomejs/biome from 2.2.6 to 2.2.7 ([#150](https://github.com/filecoin-project/filecoin-pin/issues/150)) ([c29f2e6](https://github.com/filecoin-project/filecoin-pin/commit/c29f2e674c15779d6980afe761647b568566763b))
* **deps:** bump @filoz/synapse-sdk from 0.33.0 to 0.34.0 ([#149](https://github.com/filecoin-project/filecoin-pin/issues/149)) ([e9b7f07](https://github.com/filecoin-project/filecoin-pin/commit/e9b7f07dd4de3e771828d0ce5073e4fba3c9b544))
* **docs:** agents context file ([#139](https://github.com/filecoin-project/filecoin-pin/issues/139)) ([7c610a3](https://github.com/filecoin-project/filecoin-pin/commit/7c610a329ef6feb64048e2a3e69fc9e43a762610))


### Documentation

* add CONTRIBUTING.md and AGENTS.md ([#134](https://github.com/filecoin-project/filecoin-pin/issues/134)) ([5c204ed](https://github.com/filecoin-project/filecoin-pin/commit/5c204ed1f00eb2db16676225ad6e7b37c8e7af23))

## [0.9.2](https://github.com/filecoin-project/filecoin-pin/compare/v0.9.1...v0.9.2) (2025-10-17)


### Bug Fixes

* **action:** use fileSize to determine capacity when spendrate=0 ([#132](https://github.com/filecoin-project/filecoin-pin/issues/132)) ([f498169](https://github.com/filecoin-project/filecoin-pin/commit/f498169d3a304af14a8bdfef70544758640127ac))
* log level defaults to error for CLI ([#128](https://github.com/filecoin-project/filecoin-pin/issues/128)) ([cf851e5](https://github.com/filecoin-project/filecoin-pin/commit/cf851e547d33191566b9e45e7eef8e2746c9ab55))


### Chores

* **deps:** bump @helia/unixfs from 5.1.0 to 6.0.1 ([#94](https://github.com/filecoin-project/filecoin-pin/issues/94)) ([5ceb925](https://github.com/filecoin-project/filecoin-pin/commit/5ceb9250ff468c5001aa3a22b2987787d661e10f))


### Documentation

* **action:** Fix GitHub action version references from [@v1](https://github.com/v1) to [@v0](https://github.com/v0) ([#131](https://github.com/filecoin-project/filecoin-pin/issues/131)) ([2408783](https://github.com/filecoin-project/filecoin-pin/commit/240878373af58a66012e1e8287dd00fc6431a2e0))
* **action:** streamline README and remove duplication ([#136](https://github.com/filecoin-project/filecoin-pin/issues/136)) ([2d2b742](https://github.com/filecoin-project/filecoin-pin/commit/2d2b7428e01630c25e3da2db5de5c5c0df7a76df))

## [0.9.1](https://github.com/filecoin-project/filecoin-pin/compare/v0.9.0...v0.9.1) (2025-10-16)


### Bug Fixes

* re-use upload-action PR comment ([#126](https://github.com/filecoin-project/filecoin-pin/issues/126)) ([e1cf5ec](https://github.com/filecoin-project/filecoin-pin/commit/e1cf5ec51f0b8853996e9fa3abbc2b6ed934681f)), closes [#99](https://github.com/filecoin-project/filecoin-pin/issues/99)
* upload-action provider overriding ([#116](https://github.com/filecoin-project/filecoin-pin/issues/116)) ([5a59dac](https://github.com/filecoin-project/filecoin-pin/commit/5a59dac8c27a0b2ef1e1d6b517df1d061a507ce0))
* use parseCLIAuth in add and import, add --warm-storage-address ([#123](https://github.com/filecoin-project/filecoin-pin/issues/123)) ([76bb790](https://github.com/filecoin-project/filecoin-pin/commit/76bb7909a16346ac0ca9a70f6a26cb69d5dc805f))


### Chores

* **deps:** bump actions/setup-node from 5 to 6 ([#121](https://github.com/filecoin-project/filecoin-pin/issues/121)) ([ebaabd6](https://github.com/filecoin-project/filecoin-pin/commit/ebaabd6951bad7329d004dfc5498eb2f2e97dcdc))
* **docs:** make README more accurate for current state ([#119](https://github.com/filecoin-project/filecoin-pin/issues/119)) ([dd0869b](https://github.com/filecoin-project/filecoin-pin/commit/dd0869b19de1ca5ec6890e03a6a30efba3e9a997))


### Documentation

* action example selects a random known good SP ([#125](https://github.com/filecoin-project/filecoin-pin/issues/125)) ([a23093b](https://github.com/filecoin-project/filecoin-pin/commit/a23093ba1988f7d071b0141aee81bf4389b3c3b4))
* **action:** Update Filecoin Pin Github Action README.md ([#118](https://github.com/filecoin-project/filecoin-pin/issues/118)) ([0df2e25](https://github.com/filecoin-project/filecoin-pin/commit/0df2e2558cb74a447aa2195950d34ab810a9da1c))
* **readme:** restructure and clarify project overview ([#124](https://github.com/filecoin-project/filecoin-pin/issues/124)) ([b3ce025](https://github.com/filecoin-project/filecoin-pin/commit/b3ce0258007d83d7f472fc85835d8e54eda7c033))

## [0.9.0](https://github.com/filecoin-project/filecoin-pin/compare/v0.8.1...v0.9.0) (2025-10-14)


### Features

* add support for warm storage (env var only) and provider selection ([#102](https://github.com/filecoin-project/filecoin-pin/issues/102)) ([7f8eca9](https://github.com/filecoin-project/filecoin-pin/commit/7f8eca9b94bde227edc29a8b7b7830e0b14eacd3))


### Bug Fixes

* upgrade to latest synapse-sdk ([#115](https://github.com/filecoin-project/filecoin-pin/issues/115)) ([c99e370](https://github.com/filecoin-project/filecoin-pin/commit/c99e37036931d054c4127d44d10022a9e243a000))


### Chores

* **deps-dev:** bump @biomejs/biome from 2.2.5 to 2.2.6 ([#112](https://github.com/filecoin-project/filecoin-pin/issues/112)) ([e8c4ce5](https://github.com/filecoin-project/filecoin-pin/commit/e8c4ce5221c5845601f20e38ec8b9980b4734492))

## [0.8.1](https://github.com/filecoin-project/filecoin-pin/compare/v0.8.0...v0.8.1) (2025-10-13)


### Bug Fixes

* prevent some checks when using session key ([#110](https://github.com/filecoin-project/filecoin-pin/issues/110)) ([987c4cb](https://github.com/filecoin-project/filecoin-pin/commit/987c4cb6a64a4b23730bef4699cc497b012d9132))
* use correct addresses with session key auth ([#107](https://github.com/filecoin-project/filecoin-pin/issues/107)) ([9e05746](https://github.com/filecoin-project/filecoin-pin/commit/9e057464461589edf3cb0a8cd57857ebea1c6b12))
* use only ipni-enabled providers ([#109](https://github.com/filecoin-project/filecoin-pin/issues/109)) ([f642d6e](https://github.com/filecoin-project/filecoin-pin/commit/f642d6e6641a6d467eb11c0fbece46a9dcd7c4fc))

## [0.8.0](https://github.com/filecoin-project/filecoin-pin/compare/v0.7.3...v0.8.0) (2025-10-13)


### Features

* add session key authentication support ([#103](https://github.com/filecoin-project/filecoin-pin/issues/103)) ([8ef8261](https://github.com/filecoin-project/filecoin-pin/commit/8ef82615c76924d7e154dd3f00126d94c385c180))
* create re-usable github action ([#60](https://github.com/filecoin-project/filecoin-pin/issues/60)) ([aa6b9bf](https://github.com/filecoin-project/filecoin-pin/commit/aa6b9bfc957bc59621606c1bad7e1a676b7fddaf))


### Bug Fixes

* cli supports session-key & wallet options ([#105](https://github.com/filecoin-project/filecoin-pin/issues/105)) ([e362531](https://github.com/filecoin-project/filecoin-pin/commit/e362531ccd17661c3ae745ef6c82939c740f6fbf))


### Chores

* **dev:** fix biome version ([#77](https://github.com/filecoin-project/filecoin-pin/issues/77)) ([dbf14be](https://github.com/filecoin-project/filecoin-pin/commit/dbf14be0ec0b52b88dd8282cf03b180ca67a370b))

## [0.7.3](https://github.com/filecoin-project/filecoin-pin/compare/v0.7.2...v0.7.3) (2025-10-09)


### Bug Fixes

* add auto-fund option ([#79](https://github.com/filecoin-project/filecoin-pin/issues/79)) ([c1e2f72](https://github.com/filecoin-project/filecoin-pin/commit/c1e2f72a2d7dfd4ae78c305063e9feb277fe3da9))
* createStorageContext supports multi-tenancy ([#93](https://github.com/filecoin-project/filecoin-pin/issues/93)) ([d47d3f3](https://github.com/filecoin-project/filecoin-pin/commit/d47d3f3f633e0972f21db3fe2153c49b4827a242))
* pass metadata through to executeUpload ([#89](https://github.com/filecoin-project/filecoin-pin/issues/89)) ([300ecd5](https://github.com/filecoin-project/filecoin-pin/commit/300ecd58f4132410c401a2dae45073975d98e9a2))

## [0.7.2](https://github.com/filecoin-project/filecoin-pin/compare/v0.7.1...v0.7.2) (2025-10-09)


### Bug Fixes

* avoid empty-directory block in directory CAR ([#85](https://github.com/filecoin-project/filecoin-pin/issues/85)) ([53fc7df](https://github.com/filecoin-project/filecoin-pin/commit/53fc7df58e5c31bfc72dd13e108d376ce7fdd2a4))

## [0.7.1](https://github.com/filecoin-project/filecoin-pin/compare/v0.7.0...v0.7.1) (2025-10-09)


### Bug Fixes

* build cars in the browser ([#83](https://github.com/filecoin-project/filecoin-pin/issues/83)) ([4ec9a0f](https://github.com/filecoin-project/filecoin-pin/commit/4ec9a0f97a6f5763fa441c6b126f43f280673247))

## [0.7.0](https://github.com/filecoin-project/filecoin-pin/compare/v0.6.0...v0.7.0) (2025-10-08)


### Features

* provide lib access via import from 'filecoin-pin/core' ([#82](https://github.com/filecoin-project/filecoin-pin/issues/82)) ([066c66b](https://github.com/filecoin-project/filecoin-pin/commit/066c66b7b4660a62fa74ec6c8b25b620c2d7b09e))


### Bug Fixes

* deposit allows passing days or amount ([#72](https://github.com/filecoin-project/filecoin-pin/issues/72)) ([f34c8e5](https://github.com/filecoin-project/filecoin-pin/commit/f34c8e5f362ad6726090a87d88a5c7c7362f8471))
* lint failures on extension names ([#70](https://github.com/filecoin-project/filecoin-pin/issues/70)) ([4429e7a](https://github.com/filecoin-project/filecoin-pin/commit/4429e7acb912a9a86ad870779d161639fe6ee710))
* ux friendly payment funds subcommand ([#75](https://github.com/filecoin-project/filecoin-pin/issues/75)) ([837879b](https://github.com/filecoin-project/filecoin-pin/commit/837879b8f23a49a62dd2c9ac3c5d33b8bd3ae79c))


### Chores

* **deps:** bump @filoz/synapse-sdk from 0.28.0 to 0.29.3 ([#63](https://github.com/filecoin-project/filecoin-pin/issues/63)) ([48246ea](https://github.com/filecoin-project/filecoin-pin/commit/48246ea198261929520c73a7ce4aefe5ad6e3b54))
* **deps:** bump pino from 9.13.1 to 10.0.0 ([#64](https://github.com/filecoin-project/filecoin-pin/issues/64)) ([f7f84d1](https://github.com/filecoin-project/filecoin-pin/commit/f7f84d1b59732ac42807f8456261491eac6ab526))

## [0.6.0](https://github.com/filecoin-project/filecoin-pin/compare/v0.5.0...v0.6.0) (2025-09-29)


### Features

* add data-set command ([#50](https://github.com/filecoin-project/filecoin-pin/issues/50)) ([8b83a02](https://github.com/filecoin-project/filecoin-pin/commit/8b83a022432f0fd2fc12a0117e565265273b2fbd))
* allow overriding provider ([#53](https://github.com/filecoin-project/filecoin-pin/issues/53)) ([70681de](https://github.com/filecoin-project/filecoin-pin/commit/70681de574e0ac4a4619efa499af81086ac2da6f))
* make WarmStorage approvals infinite, focus only on deposit ([#47](https://github.com/filecoin-project/filecoin-pin/issues/47)) ([1064d78](https://github.com/filecoin-project/filecoin-pin/commit/1064d78b86fa55a3d1b850a898703683a1172700))
* status,deposit,withdraw cmds ([#52](https://github.com/filecoin-project/filecoin-pin/issues/52)) ([278ed5a](https://github.com/filecoin-project/filecoin-pin/commit/278ed5a5ae54aa8cc068083e0a884fdebebf5fdf))

## [0.5.0](https://github.com/filecoin-project/filecoin-pin/compare/v0.4.1...v0.5.0) (2025-09-25)


### Features

* **add:** implement `add` command with unixfs packing for single file ([690e06b](https://github.com/filecoin-project/filecoin-pin/commit/690e06b5cc2a9d4334626aa0aff2c2c9dcfae3be))
* **add:** support whole directory adding ([69c9067](https://github.com/filecoin-project/filecoin-pin/commit/69c90672e8f18e1f4f8a61e0e65893144c228eac))
* **add:** wrap file in directory by default, opt-out with --bare ([316237b](https://github.com/filecoin-project/filecoin-pin/commit/316237bc4362f2afb14cdcd16f7283ee10a4e455))


### Bug Fixes

* storage calculations are accurate and precise ([#36](https://github.com/filecoin-project/filecoin-pin/issues/36)) ([cc56cc1](https://github.com/filecoin-project/filecoin-pin/commit/cc56cc1ab1cfbf039f2f323498a6230f5d0dc5f1))


### Chores

* use size constants, add tests, enable coverage ([#35](https://github.com/filecoin-project/filecoin-pin/issues/35)) ([9aab57f](https://github.com/filecoin-project/filecoin-pin/commit/9aab57fae4e17ab702c12079eca3d82a7307b5c4))

## [0.4.1](https://github.com/filecoin-project/filecoin-pin/compare/v0.4.0...v0.4.1) (2025-09-23)


### Bug Fixes

* payments setup script no longer hangs ([#32](https://github.com/filecoin-project/filecoin-pin/issues/32)) ([688389f](https://github.com/filecoin-project/filecoin-pin/commit/688389f5e57d68ed1f46dba37463343a7e1fde31))


### Chores

* **payments:** if no actions taken, print appropriate msg ([#34](https://github.com/filecoin-project/filecoin-pin/issues/34)) ([1b66655](https://github.com/filecoin-project/filecoin-pin/commit/1b6665513bddf354854581db0b67d8dcc1706380))

## [0.4.0](https://github.com/filecoin-project/filecoin-pin/compare/v0.3.0...v0.4.0) (2025-09-19)


### Features

* check payments status on import command ([91b5628](https://github.com/filecoin-project/filecoin-pin/commit/91b56284a25e186cf69d3c4e03fbd474073c95ba))


### Chores

* misc cleanups and refactoring ([afc19ae](https://github.com/filecoin-project/filecoin-pin/commit/afc19ae17f5b03e534ec5d747ba1212fba7e613e))

## [0.3.0](https://github.com/filecoin-project/filecoin-pin/compare/v0.2.2...v0.3.0) (2025-09-19)


### Features

* filecoin-pin import /path/to/car ([#26](https://github.com/filecoin-project/filecoin-pin/issues/26)) ([d607af8](https://github.com/filecoin-project/filecoin-pin/commit/d607af82eeae1c5940b17abfbc2b6ecb7f34ecc0))


### Chores

* rearrange Synapse use to improve educational value ([#28](https://github.com/filecoin-project/filecoin-pin/issues/28)) ([5eac7ef](https://github.com/filecoin-project/filecoin-pin/commit/5eac7ef00b8812b848f5358a9a147bce64b56c3f))
* update release-please config to be more comprehensive ([#29](https://github.com/filecoin-project/filecoin-pin/issues/29)) ([647e673](https://github.com/filecoin-project/filecoin-pin/commit/647e673b9113a9fe7c77ff0932c8db80aec40584))

## [0.2.2](https://github.com/filecoin-project/filecoin-pin/compare/v0.2.1...v0.2.2) (2025-09-18)


### Bug Fixes

* make output consistent, reduce duplication ([bd97854](https://github.com/filecoin-project/filecoin-pin/commit/bd97854f27132ed187a9f78eeb04c14ba662dd32))
* payments storage pricing consistency ([b859bcb](https://github.com/filecoin-project/filecoin-pin/commit/b859bcbc99cce48f5dc1b9f1c2dc8ca8691cda94))

## [0.2.1](https://github.com/filecoin-project/filecoin-pin/compare/v0.2.0...v0.2.1) (2025-09-18)


### Bug Fixes

* tweak payments language, fix minor flow issues ([#22](https://github.com/filecoin-project/filecoin-pin/issues/22)) ([3a1d187](https://github.com/filecoin-project/filecoin-pin/commit/3a1d187f2f8f848cbc52c2316deab4fa3641aead))

## [0.2.0](https://github.com/filecoin-project/filecoin-pin/compare/v0.1.0...v0.2.0) (2025-09-17)


### Features

* add `filecoin-pin payments setup` (and more) ([#16](https://github.com/filecoin-project/filecoin-pin/issues/16)) ([08400c4](https://github.com/filecoin-project/filecoin-pin/commit/08400c4835aa075b4e940dba9f7bd242dbe74479))
* add commander CLI parsing, s/daemon/server, improve docs ([3c66065](https://github.com/filecoin-project/filecoin-pin/commit/3c66065b7ca76e7c944ca2a22a17092b4d650b86))
* update deps; adapt to latest synapse-sdk; integrate biome ([b543926](https://github.com/filecoin-project/filecoin-pin/commit/b543926a47c92a43eabe724993036f81a7008c0f))


### Bug Fixes

* configure release-please tags ([06bf6bc](https://github.com/filecoin-project/filecoin-pin/commit/06bf6bc9589cf6d293ca7deeb9afc0ea7bbc72c4))
* release-please config ([54f0bdc](https://github.com/filecoin-project/filecoin-pin/commit/54f0bdce2b65d4153ca2e1d3a048849c190ee76e))

## Changelog
