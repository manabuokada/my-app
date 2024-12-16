FROM debian:stable-slim

RUN apt-get update && apt-get install -y \
    zsh \
    git \
    curl \
    unzip \
    sudo \
    ca-certificates \
    apt-transport-https \
    gnupg \
    openssl

# 一般ユーザーを作成
ARG USERNAME=developer
ARG USER_UID=1000
ARG USER_GID=$USER_UID

RUN groupadd --gid $USER_GID $USERNAME \
    && useradd --uid $USER_UID --gid $USER_GID -m $USERNAME \
    && chsh -s /usr/bin/zsh $USERNAME \
    && usermod -aG sudo $USERNAME \
    && echo "$USERNAME ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers.d/$USERNAME

RUN bash -s /usr/bin/zsh

SHELL ["/bin/zsh", "-c"]


# ユーザーを切り替え
USER $USERNAME
WORKDIR /home/$USERNAME
RUN curl -fsSL https://raw.githubusercontent.com/zimfw/install/master/install.zsh | zsh

RUN curl -fsSL https://bun.sh/install | bash
RUN exec $SHELL

CMD ["/bin/zsh"]
