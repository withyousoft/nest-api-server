'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nest-app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthenticationModule.html" data-type="entity-link" >AuthenticationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthenticationModule-cc68fe43946c273e6d7423470d8b7b8b203e94d6ba5d2879e7481bb89d169db4600d78a6e4bafcb1b90925c6df679fa14d6884e065cc8e411e6510bdfd7e09da"' : 'data-bs-target="#xs-controllers-links-module-AuthenticationModule-cc68fe43946c273e6d7423470d8b7b8b203e94d6ba5d2879e7481bb89d169db4600d78a6e4bafcb1b90925c6df679fa14d6884e065cc8e411e6510bdfd7e09da"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthenticationModule-cc68fe43946c273e6d7423470d8b7b8b203e94d6ba5d2879e7481bb89d169db4600d78a6e4bafcb1b90925c6df679fa14d6884e065cc8e411e6510bdfd7e09da"' :
                                            'id="xs-controllers-links-module-AuthenticationModule-cc68fe43946c273e6d7423470d8b7b8b203e94d6ba5d2879e7481bb89d169db4600d78a6e4bafcb1b90925c6df679fa14d6884e065cc8e411e6510bdfd7e09da"' }>
                                            <li class="link">
                                                <a href="controllers/AuthenticationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthenticationController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/TwoFactorAuthenticationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TwoFactorAuthenticationController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthenticationModule-cc68fe43946c273e6d7423470d8b7b8b203e94d6ba5d2879e7481bb89d169db4600d78a6e4bafcb1b90925c6df679fa14d6884e065cc8e411e6510bdfd7e09da"' : 'data-bs-target="#xs-injectables-links-module-AuthenticationModule-cc68fe43946c273e6d7423470d8b7b8b203e94d6ba5d2879e7481bb89d169db4600d78a6e4bafcb1b90925c6df679fa14d6884e065cc8e411e6510bdfd7e09da"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthenticationModule-cc68fe43946c273e6d7423470d8b7b8b203e94d6ba5d2879e7481bb89d169db4600d78a6e4bafcb1b90925c6df679fa14d6884e065cc8e411e6510bdfd7e09da"' :
                                        'id="xs-injectables-links-module-AuthenticationModule-cc68fe43946c273e6d7423470d8b7b8b203e94d6ba5d2879e7481bb89d169db4600d78a6e4bafcb1b90925c6df679fa14d6884e065cc8e411e6510bdfd7e09da"' }>
                                        <li class="link">
                                            <a href="injectables/AuthenticationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthenticationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TwoFactorAuthenticationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TwoFactorAuthenticationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseModule.html" data-type="entity-link" >DatabaseModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/EmailModule.html" data-type="entity-link" >EmailModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-EmailModule-c8a4c6e6afd60018da0178d9c56a49dcfcb94dc96813467af5bc3a54657c22d0ffa613eb330de5db0e9cfb64d8db4e059ba49e56348fe1ff544866b1589a7e68"' : 'data-bs-target="#xs-injectables-links-module-EmailModule-c8a4c6e6afd60018da0178d9c56a49dcfcb94dc96813467af5bc3a54657c22d0ffa613eb330de5db0e9cfb64d8db4e059ba49e56348fe1ff544866b1589a7e68"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-EmailModule-c8a4c6e6afd60018da0178d9c56a49dcfcb94dc96813467af5bc3a54657c22d0ffa613eb330de5db0e9cfb64d8db4e059ba49e56348fe1ff544866b1589a7e68"' :
                                        'id="xs-injectables-links-module-EmailModule-c8a4c6e6afd60018da0178d9c56a49dcfcb94dc96813467af5bc3a54657c22d0ffa613eb330de5db0e9cfb64d8db4e059ba49e56348fe1ff544866b1589a7e68"' }>
                                        <li class="link">
                                            <a href="injectables/EmailConfirmationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmailConfirmationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/EmailService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmailService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FileModule.html" data-type="entity-link" >FileModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-FileModule-27f4bc327d4649b64a0766791dc466874e85936e7b34abe7b5f2a3657cab1abcac0a393e1a167fefa7397bdae2cc7f542d5048695f9bf7b997f748e64c69a51b"' : 'data-bs-target="#xs-injectables-links-module-FileModule-27f4bc327d4649b64a0766791dc466874e85936e7b34abe7b5f2a3657cab1abcac0a393e1a167fefa7397bdae2cc7f542d5048695f9bf7b997f748e64c69a51b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FileModule-27f4bc327d4649b64a0766791dc466874e85936e7b34abe7b5f2a3657cab1abcac0a393e1a167fefa7397bdae2cc7f542d5048695f9bf7b997f748e64c69a51b"' :
                                        'id="xs-injectables-links-module-FileModule-27f4bc327d4649b64a0766791dc466874e85936e7b34abe7b5f2a3657cab1abcac0a393e1a167fefa7397bdae2cc7f542d5048695f9bf7b997f748e64c69a51b"' }>
                                        <li class="link">
                                            <a href="injectables/PrivateFileService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrivateFileService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PublicFileService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PublicFileService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HealthModule.html" data-type="entity-link" >HealthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-HealthModule-4c964c96b376c86271970ff4dac2f29df32dd2f0751e2ff42a3b6ab36d53da72a9320f3ce5b1b5fc943508b4dd0eca046d7fa8e2d3ffce61e9100efe2f92ed0b"' : 'data-bs-target="#xs-controllers-links-module-HealthModule-4c964c96b376c86271970ff4dac2f29df32dd2f0751e2ff42a3b6ab36d53da72a9320f3ce5b1b5fc943508b4dd0eca046d7fa8e2d3ffce61e9100efe2f92ed0b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-HealthModule-4c964c96b376c86271970ff4dac2f29df32dd2f0751e2ff42a3b6ab36d53da72a9320f3ce5b1b5fc943508b4dd0eca046d7fa8e2d3ffce61e9100efe2f92ed0b"' :
                                            'id="xs-controllers-links-module-HealthModule-4c964c96b376c86271970ff4dac2f29df32dd2f0751e2ff42a3b6ab36d53da72a9320f3ce5b1b5fc943508b4dd0eca046d7fa8e2d3ffce61e9100efe2f92ed0b"' }>
                                            <li class="link">
                                                <a href="controllers/HealthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HealthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-HealthModule-4c964c96b376c86271970ff4dac2f29df32dd2f0751e2ff42a3b6ab36d53da72a9320f3ce5b1b5fc943508b4dd0eca046d7fa8e2d3ffce61e9100efe2f92ed0b"' : 'data-bs-target="#xs-injectables-links-module-HealthModule-4c964c96b376c86271970ff4dac2f29df32dd2f0751e2ff42a3b6ab36d53da72a9320f3ce5b1b5fc943508b4dd0eca046d7fa8e2d3ffce61e9100efe2f92ed0b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-HealthModule-4c964c96b376c86271970ff4dac2f29df32dd2f0751e2ff42a3b6ab36d53da72a9320f3ce5b1b5fc943508b4dd0eca046d7fa8e2d3ffce61e9100efe2f92ed0b"' :
                                        'id="xs-injectables-links-module-HealthModule-4c964c96b376c86271970ff4dac2f29df32dd2f0751e2ff42a3b6ab36d53da72a9320f3ce5b1b5fc943508b4dd0eca046d7fa8e2d3ffce61e9100efe2f92ed0b"' }>
                                        <li class="link">
                                            <a href="injectables/ElasticsearchHealthIndicator.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ElasticsearchHealthIndicator</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoggerModule.html" data-type="entity-link" >LoggerModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-LoggerModule-e41d8bd5f4112c49a54d13ea6dc0fbe7c0b2d308107f8a078dd1b4b2fefe1635383e3fb0e3c3081f22ec51729def1d37c3025fdaacd361ea733cde60d13e68d8"' : 'data-bs-target="#xs-injectables-links-module-LoggerModule-e41d8bd5f4112c49a54d13ea6dc0fbe7c0b2d308107f8a078dd1b4b2fefe1635383e3fb0e3c3081f22ec51729def1d37c3025fdaacd361ea733cde60d13e68d8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LoggerModule-e41d8bd5f4112c49a54d13ea6dc0fbe7c0b2d308107f8a078dd1b4b2fefe1635383e3fb0e3c3081f22ec51729def1d37c3025fdaacd361ea733cde60d13e68d8"' :
                                        'id="xs-injectables-links-module-LoggerModule-e41d8bd5f4112c49a54d13ea6dc0fbe7c0b2d308107f8a078dd1b4b2fefe1635383e3fb0e3c3081f22ec51729def1d37c3025fdaacd361ea733cde60d13e68d8"' }>
                                        <li class="link">
                                            <a href="injectables/CustomLogger.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomLogger</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LogsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LogsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/OptimizeModule.html" data-type="entity-link" >OptimizeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-OptimizeModule-617444a054b0e27c0f98c483f534ffead950f187699e32e72b081a17e4651bcb3d99d14fadf53b6d59a58a78dc0ad4a74f464fb62d58b83a19ea3435d64c5e77"' : 'data-bs-target="#xs-controllers-links-module-OptimizeModule-617444a054b0e27c0f98c483f534ffead950f187699e32e72b081a17e4651bcb3d99d14fadf53b6d59a58a78dc0ad4a74f464fb62d58b83a19ea3435d64c5e77"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-OptimizeModule-617444a054b0e27c0f98c483f534ffead950f187699e32e72b081a17e4651bcb3d99d14fadf53b6d59a58a78dc0ad4a74f464fb62d58b83a19ea3435d64c5e77"' :
                                            'id="xs-controllers-links-module-OptimizeModule-617444a054b0e27c0f98c483f534ffead950f187699e32e72b081a17e4651bcb3d99d14fadf53b6d59a58a78dc0ad4a74f464fb62d58b83a19ea3435d64c5e77"' }>
                                            <li class="link">
                                                <a href="controllers/OptimizeController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OptimizeController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostModule.html" data-type="entity-link" >PostModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostModule-21fb9ef6ad3991aa32f4b4635972f2446e145ca2080ccfa5e4289715a2dfff6b26dfa915ebe7c2eb383102abb15e100b1fea797327328517ca41d15bd2c87959"' : 'data-bs-target="#xs-controllers-links-module-PostModule-21fb9ef6ad3991aa32f4b4635972f2446e145ca2080ccfa5e4289715a2dfff6b26dfa915ebe7c2eb383102abb15e100b1fea797327328517ca41d15bd2c87959"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostModule-21fb9ef6ad3991aa32f4b4635972f2446e145ca2080ccfa5e4289715a2dfff6b26dfa915ebe7c2eb383102abb15e100b1fea797327328517ca41d15bd2c87959"' :
                                            'id="xs-controllers-links-module-PostModule-21fb9ef6ad3991aa32f4b4635972f2446e145ca2080ccfa5e4289715a2dfff6b26dfa915ebe7c2eb383102abb15e100b1fea797327328517ca41d15bd2c87959"' }>
                                            <li class="link">
                                                <a href="controllers/PostController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostModule-21fb9ef6ad3991aa32f4b4635972f2446e145ca2080ccfa5e4289715a2dfff6b26dfa915ebe7c2eb383102abb15e100b1fea797327328517ca41d15bd2c87959"' : 'data-bs-target="#xs-injectables-links-module-PostModule-21fb9ef6ad3991aa32f4b4635972f2446e145ca2080ccfa5e4289715a2dfff6b26dfa915ebe7c2eb383102abb15e100b1fea797327328517ca41d15bd2c87959"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostModule-21fb9ef6ad3991aa32f4b4635972f2446e145ca2080ccfa5e4289715a2dfff6b26dfa915ebe7c2eb383102abb15e100b1fea797327328517ca41d15bd2c87959"' :
                                        'id="xs-injectables-links-module-PostModule-21fb9ef6ad3991aa32f4b4635972f2446e145ca2080ccfa5e4289715a2dfff6b26dfa915ebe7c2eb383102abb15e100b1fea797327328517ca41d15bd2c87959"' }>
                                        <li class="link">
                                            <a href="injectables/PostsSearchService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsSearchService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SearchModule.html" data-type="entity-link" >SearchModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UserModule-25c2dd767bbfb71858909e9fb2d6ce77d5c25bc5273f848586abbe95136e25a98f9ea306394a65fc9cf94db7e8de0d055223c2711cd6c138fe9d3cbf86c4ed61"' : 'data-bs-target="#xs-controllers-links-module-UserModule-25c2dd767bbfb71858909e9fb2d6ce77d5c25bc5273f848586abbe95136e25a98f9ea306394a65fc9cf94db7e8de0d055223c2711cd6c138fe9d3cbf86c4ed61"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-25c2dd767bbfb71858909e9fb2d6ce77d5c25bc5273f848586abbe95136e25a98f9ea306394a65fc9cf94db7e8de0d055223c2711cd6c138fe9d3cbf86c4ed61"' :
                                            'id="xs-controllers-links-module-UserModule-25c2dd767bbfb71858909e9fb2d6ce77d5c25bc5273f848586abbe95136e25a98f9ea306394a65fc9cf94db7e8de0d055223c2711cd6c138fe9d3cbf86c4ed61"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-25c2dd767bbfb71858909e9fb2d6ce77d5c25bc5273f848586abbe95136e25a98f9ea306394a65fc9cf94db7e8de0d055223c2711cd6c138fe9d3cbf86c4ed61"' : 'data-bs-target="#xs-injectables-links-module-UserModule-25c2dd767bbfb71858909e9fb2d6ce77d5c25bc5273f848586abbe95136e25a98f9ea306394a65fc9cf94db7e8de0d055223c2711cd6c138fe9d3cbf86c4ed61"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-25c2dd767bbfb71858909e9fb2d6ce77d5c25bc5273f848586abbe95136e25a98f9ea306394a65fc9cf94db7e8de0d055223c2711cd6c138fe9d3cbf86c4ed61"' :
                                        'id="xs-injectables-links-module-UserModule-25c2dd767bbfb71858909e9fb2d6ce77d5c25bc5273f848586abbe95136e25a98f9ea306394a65fc9cf94db7e8de0d055223c2711cd6c138fe9d3cbf86c4ed61"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/EmailConfirmationController.html" data-type="entity-link" >EmailConfirmationController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/EmailSchedulingController.html" data-type="entity-link" >EmailSchedulingController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/GoogleAuthenticationController.html" data-type="entity-link" >GoogleAuthenticationController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/HealthController.html" data-type="entity-link" >HealthController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Address.html" data-type="entity-link" >Address</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Category.html" data-type="entity-link" >Category</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Log.html" data-type="entity-link" >Log</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Post.html" data-type="entity-link" >Post</a>
                                </li>
                                <li class="link">
                                    <a href="entities/PrivateFile.html" data-type="entity-link" >PrivateFile</a>
                                </li>
                                <li class="link">
                                    <a href="entities/PublicFile.html" data-type="entity-link" >PublicFile</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CategoryNotFoundException.html" data-type="entity-link" >CategoryNotFoundException</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCategoryDto.html" data-type="entity-link" >CreateCategoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateLogDto.html" data-type="entity-link" >CreateLogDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/DatabaseLogger.html" data-type="entity-link" >DatabaseLogger</a>
                            </li>
                            <li class="link">
                                <a href="classes/EmailConfirmationDto.html" data-type="entity-link" >EmailConfirmationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/EmailScheduleDto.html" data-type="entity-link" >EmailScheduleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ExceptionsLoggerFilter.html" data-type="entity-link" >ExceptionsLoggerFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindOneParams.html" data-type="entity-link" >FindOneParams</a>
                            </li>
                            <li class="link">
                                <a href="classes/HttpExceptionFilter.html" data-type="entity-link" >HttpExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/ImageProcessor.html" data-type="entity-link" >ImageProcessor</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaginationParams.html" data-type="entity-link" >PaginationParams</a>
                            </li>
                            <li class="link">
                                <a href="classes/PostNotFoundException.html" data-type="entity-link" >PostNotFoundException</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegisterDto.html" data-type="entity-link" >RegisterDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/TokenVerificationDto.html" data-type="entity-link" >TokenVerificationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/TwoFactorAuthenticationCodeDto.html" data-type="entity-link" >TwoFactorAuthenticationCodeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCategoryDto.html" data-type="entity-link" >UpdateCategoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePostDto.html" data-type="entity-link" >UpdatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserNotFoundException.html" data-type="entity-link" >UserNotFoundException</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CategoriesService.html" data-type="entity-link" >CategoriesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CustomLogger.html" data-type="entity-link" >CustomLogger</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EmailSchedulingService.html" data-type="entity-link" >EmailSchedulingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EmailService.html" data-type="entity-link" >EmailService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ExcludeNullInterceptor.html" data-type="entity-link" >ExcludeNullInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GoogleAuthenticationService.html" data-type="entity-link" >GoogleAuthenticationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtAuthenticationGuard.html" data-type="entity-link" >JwtAuthenticationGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtRefreshGuard.html" data-type="entity-link" >JwtRefreshGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtRefreshTokenStrategy.html" data-type="entity-link" >JwtRefreshTokenStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtTwoFactorGuard.html" data-type="entity-link" >JwtTwoFactorGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtTwoFactorStrategy.html" data-type="entity-link" >JwtTwoFactorStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalAuthenticationGuard.html" data-type="entity-link" >LocalAuthenticationGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LogsMiddleware.html" data-type="entity-link" >LogsMiddleware</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LogsService.html" data-type="entity-link" >LogsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostsSearchService.html" data-type="entity-link" >PostsSearchService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/EmailConfirmationGuard.html" data-type="entity-link" >EmailConfirmationGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/PostSearchBody.html" data-type="entity-link" >PostSearchBody</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PostSearchResult.html" data-type="entity-link" >PostSearchResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RequestWithUser.html" data-type="entity-link" >RequestWithUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TokenPayload.html" data-type="entity-link" >TokenPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/VerificationTokenPayload.html" data-type="entity-link" >VerificationTokenPayload</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});