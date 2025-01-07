class UserAuditMixin:
    """Mixins class to add auditing fields for created_by, updated_by, and deleted_by"""
    pass
    # @declared_attr
    # def created_by(cls) -> Mapped[Optional[int]]:
    #     return mapped_column(BigInteger, ForeignKey("users.id"), nullable=True)
    #
    # @declared_attr
    # def updated_by(cls) -> Mapped[Optional[int]]:
    #     return mapped_column(BigInteger, ForeignKey("users.id"), nullable=True)
    #
    # @declared_attr
    # def deleted_by(cls) -> Mapped[Optional[int]]:
    #     return mapped_column(BigInteger, ForeignKey("users.id"), nullable=True)