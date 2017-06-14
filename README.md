# glamorous-pseudo

[![npm version](https://badge.fury.io/js/glamorous-pseudo.svg)](https://badge.fury.io/js/glamorous-pseudo)
[![Build Status](https://travis-ci.org/tkh44/glamorous-pseudo.svg?branch=master)](https://travis-ci.org/tkh44/glamorous-pseudo)
[![codecov](https://codecov.io/gh/tkh44/glamorous-pseudo/branch/master/graph/badge.svg)](https://codecov.io/gh/tkh44/glamorous-pseudo)

-   [Install](#install)
-   [Basic Usage](#basic-usage)
-   [Props](#props)

## Install

```bash
npm install -S glamorous-pseudo
```

## Basic Usage
```jsx
<Pseudo
  after={{ content: '" after"', color: 'red' }}
  before={{ content: '"before "', color: 'green' }}
  focus={{ color: 'blue' }}
  hover={{ color: 'purple' }}
  active={{ fontSize: '0.8em' }}
  visited={{ color: '#5EDA7E' }}
  display="block"
  width={300}
  textAlign="center"
>
  <h1>Hello</h1>
</Pseudo>

// Create your own ui library
const A = (props) => <Pseudo {...props} component={glamorous.A} />

<A
  hover={{ color: '#a9e34b' }}
  href="https://startup.com"
>
  Startup
</A>

```

## Props


#### component `GlamorousComponent`

```jsx
glamorous.Div, glamorous.A, glamorous.Span, ...
```

*Any props passed to `Pseudo` will be passed through to `component`*

#### after `object`

`:after` styles

#### before `object`

`:before` styles

#### focus `object`

`:focus` styles

#### hover `object`

`:hover` styles

#### active `object`

`:active` styles

#### visited `object`

`:visited` styles


