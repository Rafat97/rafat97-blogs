---
Title : Generative Adversarial Network
---

# What is Generative Adversarial Network(GAN)

A **GAN, or Generative Adversarial Network** is a **machine learning framework**. It can generate new data points by sampling from this distribution (i.e. choosing combinations with large probability).So, It's a  **probability distribution**. In the case of images, that means you have a probability for every possible combination of pixel values. **For example, generating face, hand digit generation, etc**

GANs have 2 major component. There are - 

**Generator** : Generative models(G) can generate new data instances. It captures the data distribution. In short,   Generator is to create data in such a way that it can fool the discriminator.

**Discriminator**  : Discriminative models(D) discriminate between different kinds of data instances. It estimates
the probability that a sample came from the training data rather than Generative models(G). In short, Discriminator is to distinguish between actual and generated (fake) data.

This
framework corresponds to a minimax two-player game. There are many kinds of generative model. GANs are just one kind of generative model.

# Some  Generative examples of GANs Work

![GAN Fig-1](./images/3.png)
Figure 1: Visualization of samples from the model.

# Basic structure behind of (GAN)

Here some pictures of the whole system -

<!-- ![GAN Fig-2](./images/1.svg) -->

![GAN Fig-3](./images/2.png)

![GAN Fig-6](./images/6.png)



## Backpropagation in  discriminator training
![Discriminator Backpropagation](./images/9.svg)

## Backpropagation in generator training
![Backpropagation in generator training](./images/8.svg)


# GANs Loss function

![GAN Fig-4](./images/5.png)

![GAN Fig-5](./images/4.png)



In this equation we say,This formula look like **binary cross-entropy loss function**. D and G play the following two-player minimax game with value function V (G, D).

In this loss function there have some problem-

**Vanishing Gradient**: if your discriminator is too good, then generator training can fail due to vanishing gradients. In effect, an optimal discriminator doesn't provide enough information for the generator to make progress.

**Mode Collapse** : During training, the generator may get stuck into a setting where it always produces the same output.

# GANs Algorithm

![GANs Algo](./images/7.png)


# Resources

[Pytorch Vanilla Gan](https://www.kaggle.com/rafat97/pytorch-vanilla-gan)

[Generative Adversarial Networks Original paper](https://arxiv.org/abs/1406.2661)

[The math behind GANs](https://towardsdatascience.com/the-math-behind-gans-generative-adversarial-networks-3828f3469d9c)

[Papers with code](https://paperswithcode.com/method/gan)

[GANs Google](https://developers.google.com/machine-learning/gan/)